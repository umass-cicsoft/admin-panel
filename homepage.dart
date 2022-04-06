import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import './member.dart';
import 'memberinfo.dart';

class HomePage extends StatefulWidget {
  const HomePage({
    Key? key,
  }) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Map _members = {};
  final _database = FirebaseDatabase.instance.ref();

  @override
  void initState() {
    super.initState();
    _refresh();
  }

  void _refresh() {
    _database.child('members').onValue.listen((event) {
      final Object? _message = event.snapshot.value;
      setState(() {
        _members = _message as Map;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Admin Panel'),
        ),
        body: Center(
            child:
                Column(mainAxisAlignment: MainAxisAlignment.start, children: [
          ElevatedButton(
              onPressed: () {
                _refresh();
              },
              child: const Text('refresh')),
          SizedBox(
              height: 700,
              width: 300,
              child: ListView.builder(
                itemCount: _members.length,
                itemBuilder: (context, int index) {
                  final _member =
                      Member.fromJson(_members[_members.keys.toList()[index]]);
                  return ElevatedButton(
                      onPressed: () {
                         Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              MemberInfo(member: _member)),
                                    );
                      },
                      child: Text(_member.firstName));
                },
              )),
        ])));
  }
}
