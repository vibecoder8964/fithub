import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/app_router.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Card(
          child: ListTile(
            leading: const Icon(Icons.flag),
            title: const Text('Daily Goals'),
            subtitle: const Text('Check tasks'),
            onTap: () => context.goNamed(AppRoute.goals.name),
          ),
        ),
        Card(
          child: ListTile(
            leading: const Icon(Icons.military_tech),
            title: const Text('Badges'),
            onTap: () => context.goNamed(AppRoute.badges.name),
          ),
        ),
        Card(
          child: ListTile(
            leading: const Icon(Icons.calendar_today),
            title: const Text('Timetable'),
            onTap: () => context.goNamed(AppRoute.timetable.name),
          ),
        ),
        Card(
          child: ListTile(
            leading: const Icon(Icons.groups),
            title: const Text('Community'),
            onTap: () => context.goNamed(AppRoute.community.name),
          ),
        ),
        Card(
          child: ListTile(
            leading: const Icon(Icons.shopping_bag),
            title: const Text('Shop'),
            onTap: () => context.goNamed(AppRoute.shop.name),
          ),
        ),
        Card(
          child: ListTile(
            leading: const Icon(Icons.emoji_events),
            title: const Text('Tournament'),
            onTap: () => context.goNamed(AppRoute.tournament.name),
          ),
        ),
      ],
    );
  }
}

