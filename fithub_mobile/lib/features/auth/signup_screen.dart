import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../core/app_router.dart';
import '../../core/supabase_client.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({super.key});

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final _formKey = GlobalKey<FormState>();
  final _identifierCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();

  bool _loading = false;
  String? _error;

  bool get _validPassword {
    final p = _passwordCtrl.text;
    final hasNumber = RegExp(r'\d').hasMatch(p);
    final hasUpper = RegExp(r'[A-Z]').hasMatch(p);
    return p.length >= 8 && hasNumber && hasUpper;
  }

  bool _isGmail(String v) =>
      RegExp(r'^[a-zA-Z0-9._%+-]+@gmail\.com$').hasMatch(v);

  bool _isPhone(String v) =>
      RegExp(r'^\+?[0-9\\s\\-]{7,15}$').hasMatch(v);

  Future<void> _handleSignUp() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final id = _identifierCtrl.text.trim();
      if (!_isGmail(id) && !_isPhone(id)) {
        setState(() =>
            _error = 'Not a valid Google Mail or Phone Number!');
        return;
      }

      final exRes =
          await Supa.client.from('exercises').select('id').limit(1);
      if (exRes == null || exRes.isEmpty) {
        setState(() => _error = 'No exercises found in database.');
        return;
      }
      final workout1 = exRes.first['id'] as String;

      final password = _passwordCtrl.text;

      final payload = <String, dynamic>{
        'description': '',
        'username': 'user_temp',
        'password': password,
        'email': _isGmail(id) ? id : 'placeholder@gmail.com',
        'phone_number': _isPhone(id) ? id : 'Unknown',
        'condition': '',
        'age': 18,
        'height': 170,
        'weight': 70,
        'gender': 'male',
        'living_country': 'Unknown',
        'engage_time_before_1': '00:00:00',
        'engage_time_after_1': '00:00:00',
        'workout_time_1': '00:00:00',
        'workout_1': workout1,
        'breakfast_time': '08:00:00',
        'lunch_time': '12:00:00',
        'dinner_time': '18:00:00',
      };

      final res = await Supa.client
          .from('users')
          .insert(payload)
          .select('id')
          .single();
      final uuid = res['id'] as String;

      // TODO: cache uuid securely for subsequent Step 2–8 updates.
      if (!mounted) return;
      context.goNamed(AppRoute.step2.name);
    } on PostgrestException catch (e) {
      if (e.code == '23505') {
        setState(() =>
            _error = 'Email or Phone number is already registered.');
      } else {
        setState(() => _error = 'Database error.');
      }
    } catch (_) {
      setState(() => _error = 'Unexpected error.');
    } finally {
      if (mounted) {
        setState(() => _loading = false);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final canSubmit = _validPassword && !_loading;

    return Scaffold(
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    'Create Account',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 24),
                  TextFormField(
                    controller: _identifierCtrl,
                    decoration: const InputDecoration(
                      labelText: 'Phone or Google Mail',
                    ),
                    validator: (v) =>
                        (v == null || v.isEmpty) ? 'Required' : null,
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _passwordCtrl,
                    obscureText: true,
                    decoration: const InputDecoration(
                      labelText: 'Set Password',
                    ),
                    onChanged: (_) => setState(() {}),
                    validator: (v) =>
                        (v == null || v.isEmpty) ? 'Required' : null,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    _validPassword
                        ? 'Password strength OK'
                        : 'At least 8 chars, 1 uppercase, 1 number',
                    style: TextStyle(
                      color: _validPassword ? Colors.green : Colors.red,
                      fontSize: 12,
                    ),
                  ),
                  if (_error != null) ...[
                    const SizedBox(height: 12),
                    Text(
                      _error!,
                      style: const TextStyle(color: Colors.red),
                    ),
                  ],
                  const SizedBox(height: 24),
                  ElevatedButton(
                    onPressed: canSubmit ? _handleSignUp : null,
                    child: Text(
                      _loading ? 'Signing up...' : 'Sign Up',
                    ),
                  ),
                  TextButton(
                    onPressed: () =>
                        context.goNamed(AppRoute.login.name),
                    child: const Text('Log in'),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

