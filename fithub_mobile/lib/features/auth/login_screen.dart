import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/app_router.dart';
import '../../core/supabase_client.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final _identifierCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();
  bool _loading = false;
  String? _error;

  Future<void> _handleLogin() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final identifier = _identifierCtrl.text.trim();
      final password = _passwordCtrl.text;

      final res = await Supa.client
          .from('users')
          .select('id, password')
          .or('username.eq.$identifier,phone_number.eq.$identifier');

      if (res == null || res.isEmpty) {
        setState(() => _error = 'Invalid username/phone or password.');
        return;
      }

      final user = res.first;
      if (user['password'] != password) {
        setState(() => _error = 'Invalid username/phone or password.');
        // TODO: add 5-attempt lockout logic mirroring VALIDATING()
        return;
      }

      // VALIDATING() passed; in a full app you would persist uuid securely.
      if (!mounted) return;
      context.goNamed(AppRoute.home.name);
    } catch (_) {
      setState(() => _error = 'Unexpected error. Please try again.');
    } finally {
      if (mounted) {
        setState(() => _loading = false);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
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
                    'FitHub',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 24),
                  TextFormField(
                    controller: _identifierCtrl,
                    decoration: const InputDecoration(
                      labelText: 'Username or Phone Number',
                    ),
                    validator: (v) =>
                        (v == null || v.isEmpty) ? 'Required' : null,
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _passwordCtrl,
                    obscureText: true,
                    decoration: const InputDecoration(labelText: 'Password'),
                    validator: (v) =>
                        (v == null || v.isEmpty) ? 'Required' : null,
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
                    onPressed: _loading ? null : _handleLogin,
                    child: Text(_loading ? 'Verifying...' : 'Log In'),
                  ),
                  const SizedBox(height: 16),
                  TextButton(
                    onPressed: () =>
                        context.goNamed(AppRoute.signup.name),
                    child: const Text('Sign up now'),
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

