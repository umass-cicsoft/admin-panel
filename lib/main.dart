import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import './firebase_options.dart';
import 'package:firebase_core/firebase_core.dart';
import './homepage.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized(); //ensure everythings initialized!
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({Key? key}) : super(key: key);

  final Future<FirebaseApp> _server = Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Admin Panel',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: FutureBuilder(
            future: _server,
            builder: (context, snapshot) {
              if (snapshot.hasError) {
                //if error occurs return this!
                // ignore: avoid_print
                print("ERROR: ${snapshot.error.toString()}");
                return const Text("Oops, something went wrong!");
              } else if (snapshot.hasData) {
                //if data returned load up home page!
                return  const HomePage();
              } else {
                //if no data has been returned yet show loading screen!
                return const Center(
                  child: CircularProgressIndicator(),
                );
              }
            }));
  }
}
