class Member {
  final String name;
  final String gitLink;
  final String gradYear;
  final String intResp;
  final String joinedOn;
  final String lastName;
  final String linkedin;
  final String major;
  final String refResp;
  final String status;
  final String email;

  Member({
    required this.name,
    required this.gitLink,
    required this.gradYear,
    required this.intResp,
    required this.joinedOn,
    required this.lastName,
    required this.linkedin,
    required this.major,
    required this.refResp,
    required this.status,
    required this.email,
  });

  //from json to object
  factory Member.fromJson(json) {
    return Member(
      name: json['name'],
      gitLink: json['githib_link'],
      gradYear: json['graduation_year'],
      intResp: json['interest_responce'],
      joinedOn: json['joined_on'],
      lastName: json['last_name'],
      linkedin: json['linkedin_link'],
      major: json['major'],
      refResp: json['referral_responce'],
      status: json['status'],
      email: json['umass_email'],
    );
  }

//from object to json
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'githib_link': gitLink,
      'graduation_year': gradYear,
      'interest_responce': intResp,
      'joined_on': joinedOn,
      'last_name': lastName,
      'linkedin_link': linkedin,
      'major': major,
      'referral_responce': refResp,
      'status': status,
      'umass_email': email,
    };
  }
}
