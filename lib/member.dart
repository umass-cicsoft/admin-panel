class Member {
  final String firstName;
  final String gitLink;
  final int gradYear;
  final String intResp;
  final String joinedOn;
  final String lastName;
  final String linkedin;
  final String major;
  final String refResp;
  final String status;
  final String email;

  Member({
    required this.firstName,
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
      firstName: json['first_name'],
      gitLink: json['github_link'],
      gradYear: json['graduation_year'],
      intResp: json['interest_response'],
      joinedOn: json['joined_on'],
      lastName: json['last_name'],
      linkedin: json['linkedin_link'],
      major: json['major'],
      refResp: json['referral_response'],
      status: json['status'],
      email: json['umass_email'],
    );
  }

//from object to json
  Map<String, dynamic> toJson() {
    return {
      'first_name': firstName,
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
