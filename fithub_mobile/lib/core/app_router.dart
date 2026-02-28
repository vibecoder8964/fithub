import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../features/auth/login_screen.dart';
import '../features/auth/signup_screen.dart';
import '../features/auth/step2_screen.dart';
import '../features/auth/step3_screen.dart';
import '../features/auth/step4_screen.dart';
import '../features/auth/step5_screen.dart';
import '../features/auth/step6_screen.dart';
import '../features/auth/step7_screen.dart';
import '../features/auth/step8_screen.dart';

import '../features/shell/app_shell.dart';
import '../features/home/home_screen.dart';
import '../features/goals/goals_screen.dart';
import '../features/badges/badges_screen.dart';
import '../features/timetable/timetable_screen.dart';
import '../features/shop/shop_screen.dart';
import '../features/tournament/tournament_screen.dart';
import '../features/community/community_screen.dart';
import '../features/chat/chat_screen.dart';
import '../features/motion/motion_screen.dart';
import '../features/food/food_screen.dart';
import '../features/nudge/nudge_screen.dart';
import '../features/sleep/sleep_screen.dart';
import '../features/zen/zen_screen.dart';

enum AppRoute {
  login,
  signup,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
  shell,
  home,
  goals,
  badges,
  timetable,
  shop,
  tournament,
  community,
  chat,
  motion,
  food,
  nudge,
  sleep,
  zen,
}

GoRouter createRouter(GlobalKey<NavigatorState> rootKey) {
  return GoRouter(
    navigatorKey: rootKey,
    initialLocation: '/login',
    routes: [
      GoRoute(
        path: '/login',
        name: AppRoute.login.name,
        builder: (_, __) => const LoginScreen(),
      ),
      GoRoute(
        path: '/signup',
        name: AppRoute.signup.name,
        builder: (_, __) => const SignUpScreen(),
      ),
      GoRoute(
        path: '/step2',
        name: AppRoute.step2.name,
        builder: (_, __) => const Step2Screen(),
      ),
      GoRoute(
        path: '/step3',
        name: AppRoute.step3.name,
        builder: (_, __) => const Step3Screen(),
      ),
      GoRoute(
        path: '/step4',
        name: AppRoute.step4.name,
        builder: (_, __) => const Step4Screen(),
      ),
      GoRoute(
        path: '/step5',
        name: AppRoute.step5.name,
        builder: (_, __) => const Step5Screen(),
      ),
      GoRoute(
        path: '/step6',
        name: AppRoute.step6.name,
        builder: (_, __) => const Step6Screen(),
      ),
      GoRoute(
        path: '/step7',
        name: AppRoute.step7.name,
        builder: (_, __) => const Step7Screen(),
      ),
      GoRoute(
        path: '/step8',
        name: AppRoute.step8.name,
        builder: (_, __) => const Step8Screen(),
      ),
      ShellRoute(
        builder: (_, __, child) => AppShell(child: child),
        routes: [
          GoRoute(
            path: '/home',
            name: AppRoute.home.name,
            builder: (_, __) => const HomeScreen(),
          ),
          GoRoute(
            path: '/goals',
            name: AppRoute.goals.name,
            builder: (_, __) => const GoalsScreen(),
          ),
          GoRoute(
            path: '/badges',
            name: AppRoute.badges.name,
            builder: (_, __) => const BadgesScreen(),
          ),
          GoRoute(
            path: '/timetable',
            name: AppRoute.timetable.name,
            builder: (_, __) => const TimetableScreen(),
          ),
          GoRoute(
            path: '/shop',
            name: AppRoute.shop.name,
            builder: (_, __) => const ShopScreen(),
          ),
          GoRoute(
            path: '/tournament',
            name: AppRoute.tournament.name,
            builder: (_, __) => const TournamentScreen(),
          ),
          GoRoute(
            path: '/community',
            name: AppRoute.community.name,
            builder: (_, __) => const CommunityScreen(),
          ),
          GoRoute(
            path: '/chat',
            name: AppRoute.chat.name,
            builder: (_, state) {
              final room = state.uri.queryParameters['room'] ?? 'fitlah-ai';
              return ChatScreen(roomId: room);
            },
          ),
          GoRoute(
            path: '/motion',
            name: AppRoute.motion.name,
            builder: (_, __) => const MotionScreen(),
          ),
          GoRoute(
            path: '/food',
            name: AppRoute.food.name,
            builder: (_, __) => const FoodScreen(),
          ),
          GoRoute(
            path: '/nudge',
            name: AppRoute.nudge.name,
            builder: (_, __) => const NudgeScreen(),
          ),
          GoRoute(
            path: '/sleep',
            name: AppRoute.sleep.name,
            builder: (_, __) => const SleepScreen(),
          ),
          GoRoute(
            path: '/zen',
            name: AppRoute.zen.name,
            builder: (_, __) => const ZenScreen(),
          ),
        ],
      ),
    ],
  );
}

