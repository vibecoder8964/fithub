import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/app_router.dart';

class CommunityScreen extends StatelessWidget {
  const CommunityScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Identical-looking chat boxes: FitLah AI, Feedback, Global.
    return Scaffold(
      appBar: AppBar(title: const Text('Community')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _roomCard(
            context,
            title: 'FitLah AI Assistant',
            subtitle: 'Chat with your smart fitness companion.',
            icon: Icons.smart_toy_outlined,
            roomId: 'fitlah-ai',
          ),
          _roomCard(
            context,
            title: 'Feedback to Team',
            subtitle: 'Share ideas to improve FitHub.',
            icon: Icons.feedback_outlined,
            roomId: 'feedback',
          ),
          _roomCard(
            context,
            title: 'Global Community',
            subtitle: 'Connect with other FitHub users.',
            icon: Icons.groups_outlined,
            roomId: 'global-chat',
          ),
        ],
      ),
    );
  }

  Widget _roomCard(
    BuildContext context, {
    required String title,
    required String subtitle,
    required IconData icon,
    required String roomId,
  }) {
    return Card(
      child: ListTile(
        leading: Icon(icon),
        title: Text(title),
        subtitle: Text(subtitle),
        onTap: () => context.goNamed(
          AppRoute.chat.name,
          queryParameters: {'room': roomId},
        ),
      ),
    );
  }
}

