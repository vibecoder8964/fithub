import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../core/supabase_client.dart';
import '../../core/app_router.dart';

class AppShell extends StatefulWidget {
  final Widget child;
  const AppShell({super.key, required this.child});

  @override
  State<AppShell> createState() => _AppShellState();
}

class _AppShellState extends State<AppShell> {
  int _bottomIndex = 0;
  int _xp = 0;
  int _streak = 0;
  int _gems = 0;

  @override
  void initState() {
    super.initState();
    _loadProfile();
  }

  Future<void> _loadProfile() async {
    final uuid = Supabase.instance.client.auth.currentUser?.id;
    if (uuid == null) return;

    final res = await Supa.client
        .from('users')
        .select('xp_count, streak_count, gems_count')
        .eq('id', uuid)
        .maybeSingle();

    if (res != null && mounted) {
      setState(() {
        _xp = res['xp_count'] ?? 0;
        _streak = res['streak_count'] ?? 0;
        _gems = res['gems_count'] ?? 0;
      });
    }
  }

  void _onBottomTap(int index) {
    setState(() => _bottomIndex = index);
    final r = GoRouter.of(context);
    switch (index) {
      case 0:
        r.goNamed(AppRoute.motion.name);
        break;
      case 1:
        r.goNamed(AppRoute.food.name);
        break;
      case 2:
        r.goNamed(AppRoute.nudge.name);
        break;
      case 3:
        r.goNamed(AppRoute.sleep.name);
        break;
      case 4:
        r.goNamed(AppRoute.zen.name);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(72),
        child: SafeArea(
          bottom: false,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.surface.withOpacity(0.95),
              boxShadow: const [
                BoxShadow(
                  color: Colors.black12,
                  blurRadius: 8,
                  offset: Offset(0, 2),
                )
              ],
            ),
            child: Row(
              children: [
                _statChip(
                  context,
                  label: 'Gems',
                  icon: Icons.diamond,
                  value: _gems,
                ),
                const SizedBox(width: 8),
                _statChip(
                  context,
                  label: 'Streak',
                  icon: Icons.local_fire_department,
                  value: _streak,
                ),
                const SizedBox(width: 8),
                _statChip(
                  context,
                  label: 'XP',
                  icon: Icons.bolt,
                  value: _xp,
                ),
              ],
            ),
          ),
        ),
      ),
      body: widget.child,
      floatingActionButton: FloatingActionButton(
        onPressed: () => GoRouter.of(context).goNamed(
          AppRoute.chat.name,
          queryParameters: {'room': 'fitlah-ai'},
        ),
        child: const Icon(Icons.smart_toy_outlined),
      ),
      bottomNavigationBar: SafeArea(
        top: false,
        child: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          currentIndex: _bottomIndex,
          onTap: _onBottomTap,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.fitness_center),
              label: 'MotionSense',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.restaurant),
              label: 'PlanCalorie',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.notifications),
              label: 'SmartNudge',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.dark_mode),
              label: 'CircadianSync',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.self_improvement),
              label: 'ZenZone',
            ),
          ],
        ),
      ),
    );
  }

  Widget _statChip(
    BuildContext context, {
    required String label,
    required IconData icon,
    required int value,
  }) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surfaceVariant.withOpacity(0.7),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(
          children: [
            Icon(icon, size: 18),
            const SizedBox(width: 6),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: Theme.of(context)
                      .textTheme
                      .labelSmall
                      ?.copyWith(fontWeight: FontWeight.bold),
                ),
                Text(
                  value.toString(),
                  style: Theme.of(context)
                      .textTheme
                      .bodyMedium
                      ?.copyWith(fontWeight: FontWeight.w700),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

