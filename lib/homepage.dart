import 'dart:async';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import './member.dart';
import './memberinfo.dart';

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
  late StreamSubscription _productStream;

  @override
  void initState() {
    super.initState();
    _refresh();
  }

  @override
  void deactivate() {
    super.deactivate();
    _productStream.cancel();
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
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              ElevatedButton(onPressed: () {}, child: const Text('TBD')),
              ElevatedButton(onPressed: () {}, child: const Text('TBD')),
              ElevatedButton(onPressed: () {}, child: const Text('TBD'))
            ],
          )
        ])));
  }
}
