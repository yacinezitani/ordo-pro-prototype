// Prescription Item Model following OrdoPro Medical Specs
// Fields: medicament, posologie, boites
class PrescriptionItem {
  final String id;
  final String medicament;
  final String posologie;
  final String boites;

  PrescriptionItem({
    required this.id,
    required this.medicament,
    required this.posologie,
    this.boites = '01 boîte',
  });

  PrescriptionItem copyWith({
    String? id,
    String? medicament,
    String? posologie,
    String? boites,
  }) {
    return PrescriptionItem(
      id: id ?? this.id,
      medicament: medicament ?? this.medicament,
      posologie: posologie ?? this.posologie,
      boites: boites ?? this.boites,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'medicament': medicament,
    'posologie': posologie,
    'boites': boites,
  };

  factory PrescriptionItem.fromJson(Map<String, dynamic> json) => PrescriptionItem(
    id: json['id'] as String,
    medicament: json['medicament'] as String,
    posologie: (json['posologie'] ?? json['pathologie'] ?? '1 cp 3 fois par jour') as String,
    boites: (json['boites'] ?? (json['quantite'] != null ? '${json['quantite']} boîte' : '01 boîte')) as String,
  );
}
