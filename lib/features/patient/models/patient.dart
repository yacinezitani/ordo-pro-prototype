// Patient Model strictly following OrdoPro Spec V3 & Design Tokens
// Required: nomComplet
// Optional: age, sexe
// Excluded: telephone, adresse, localisation, numero_dossier
// Print rule: age formatted as "A : {age} ans" only when not null; sexe is NEVER printed!
class Patient {
  final int id;
  final String nomComplet;
  final int? age;
  final String? sexe;
  final String? derniereOrdonnance;

  Patient({
    required this.id,
    required this.nomComplet,
    this.age,
    this.sexe,
    this.derniereOrdonnance,
  });

  /// Formatted age for printed document according to OrdoPro specs:
  /// Returns '$age ans' if age is specified, otherwise returns 'Adulte'.
  String get printedAge {
    if (age == null) return 'Adulte';
    return '$age ans';
  }

  Patient copyWith({
    int? id,
    String? nomComplet,
    int? age,
    String? sexe,
    String? derniereOrdonnance,
  }) {
    return Patient(
      id: id ?? this.id,
      nomComplet: nomComplet ?? this.nomComplet,
      age: age ?? this.age,
      sexe: sexe ?? this.sexe,
      derniereOrdonnance: derniereOrdonnance ?? this.derniereOrdonnance,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'nom_complet': nomComplet,
    'age': age,
    'sexe': sexe,
    'derniere_ordonnance': derniereOrdonnance,
  };

  factory Patient.fromJson(Map<String, dynamic> json) => Patient(
    id: json['id'] as int,
    nomComplet: json['nom_complet'] as String,
    age: json['age'] as int?,
    sexe: json['sexe'] as String?,
    derniereOrdonnance: json['derniere_ordonnance'] as String?,
  );
}
