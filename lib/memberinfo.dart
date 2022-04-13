import 'package:flutter/material.dart';

import 'member.dart';

class MemberInfo extends StatelessWidget {
  final Member member;
  const MemberInfo({Key? key, required this.member}) : super(key: key);

  TextStyle textStyle(double x) {
    return TextStyle(fontSize: x);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text(member.firstName)),
        body: Center(
            child: Column(
          children: [
            Text(member.firstName, style: textStyle(20)),
            Text(member.lastName, style: textStyle(20)),
            Text(member.email, style: textStyle(20))
          ],
        )));
  }
}
