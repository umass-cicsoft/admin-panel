import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import './homepage.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized(); //ensure everythings initialized!
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({Key? key}) : super(key: key);

  final Future<FirebaseApp> _fbApp = Firebase.initializeApp();

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          // This is the theme of your application.
          //
          // Try running your application with "flutter run". You'll see the
          // application has a blue toolbar. Then, without quitting the app, try
          // changing the primarySwatch below to Colors.green and then invoke
          // "hot reload" (press "r" in the console where you ran "flutter run",
          // or simply save your changes to "hot reload" in a Flutter IDE).
          // Notice that the counter didn't reset back to zero; the application
          // is not restarted.
          primarySwatch: Colors.blue,
        ),
        home: FutureBuilder(
            future: _fbApp,
            builder: (context, snapshot) {
              if (snapshot.hasError) {
                //if error occurs return this!
                // ignore: avoid_print
                print("ERROR: ${snapshot.error.toString()}");
                return const Text("Oops, something went wrong!");
              } else if (snapshot.hasData) {
                //if data returned load up home page!
                return  HomePage();
              } else {
                //if no data has been returned yet show loading screen!
                return const Center(
                  child: CircularProgressIndicator(),
                );
              }
            }));
  }
}
