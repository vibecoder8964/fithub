import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'core/app_router.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Supabase.initialize(
    url: const String.fromEnvironment('SUPABASE_URL'),
    anonKey: const String.fromEnvironment('SUPABASE_ANON_KEY'),
  );

  final rootKey = GlobalKey<NavigatorState>();
  final router = createRouter(rootKey);

  runApp(FitHubApp(routerConfig: router));
}

class FitHubApp extends StatelessWidget {
  final RouterConfig<Object> routerConfig;
  const FitHubApp({super.key, required this.routerConfig});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'FitHub',
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.light,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFFFF9E00)),
        scaffoldBackgroundColor: const Color(0xFFF8F5F0),
        useMaterial3: true,
      ),
      darkTheme: ThemeData(
        brightness: Brightness.dark,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFFF9E00),
          brightness: Brightness.dark,
        ),
      ),
      routerConfig: routerConfig,
    );
  }
}

