import 'package:flutter/material.dart';
import 'ordo_colors.dart';
import 'ordo_tokens.dart';
import 'ordo_typography.dart';

// OrdoPro V3 - Desktop ThemeData
class OrdoTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      fontFamily: OrdoTypography.fontFamily,
      scaffoldBackgroundColor: OrdoColors.background,
      colorScheme: const ColorScheme.light(
        primary: OrdoColors.primary500,
        onPrimary: Colors.white,
        surface: OrdoColors.surface,
        onSurface: OrdoColors.textPrimary,
        error: OrdoColors.error,
        onError: Colors.white,
      ),
      cardTheme: CardTheme(
        color: OrdoColors.surface,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(OrdoLayoutTokens.radiusCard),
          side: const BorderSide(color: OrdoColors.border, width: 1),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: OrdoColors.surface,
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(OrdoLayoutTokens.radiusInput),
          borderSide: const BorderSide(color: OrdoColors.border),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(OrdoLayoutTokens.radiusInput),
          borderSide: const BorderSide(color: OrdoColors.border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(OrdoLayoutTokens.radiusInput),
          borderSide: const BorderSide(color: OrdoColors.primary500, width: 1.5),
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: OrdoColors.primary500,
          foregroundColor: Colors.white,
          minimumSize: const Size(0, OrdoLayoutTokens.buttonHeight),
          padding: const EdgeInsets.symmetric(horizontal: 18),
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(OrdoLayoutTokens.radiusButton),
          ),
          textStyle: const TextStyle(
            fontSize: 13.5,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}
