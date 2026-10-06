// Prescription Item Model strictly following OrdoPro Spec V3
// Only contains: medicament, pathologie, quantite.
// Excluded: dosage, forme, duree, posologie, conseils.
class PrescriptionItem {
  final String id;
  final String medicament;
  final String pathologie;
  final int quantite;

  PrescriptionItem({
    required this.id,
    required this.medicament,
    required this.pathologie,
    required this.quantite,
  });

  PrescriptionItem copyWith({
    String? id,
    String? medicament,
    String? pathologie,
    int? quantite,
  }) {
    return PrescriptionItem(
      id: id ?? this.id,
      medicament: medicament ?? this.medicament,
      pathologie: pathologie ?? this.pathologie,
      quantite: quantite ?? this.quantite,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'medicament': medicament,
    'pathologie': pathologie,
    'quantite': quantite,
  };

  factory PrescriptionItem.fromJson(Map<String, dynamic> json) => PrescriptionItem(
    id: json['id'] as String,
    medicament: json['medicament'] as String,
    pathologie: json['pathologie'] as String,
    quantite: json['quantite'] as int,
  );
}
