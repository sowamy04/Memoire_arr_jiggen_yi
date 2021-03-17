import 'dart:async';

import 'package:flutter/material.dart';
import 'package:front_mobile_aar_jiggen/connection.dart';

void main() {
  runApp(new MaterialApp(
    home: new SplashScreen(),
    debugShowCheckedModeBanner: false,
    routes: <String, WidgetBuilder>{
      '/HomeScreen': (BuildContext context) => new LoginScreen()
    },
  ));
}

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => new _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  startTime() async {
    var _duration = new Duration(seconds: 5);
    return new Timer(_duration, navigationPage);
  }

  void navigationPage() {
    Navigator.of(context).pushReplacementNamed('/HomeScreen');
  }

  @override
  void initState() {
    super.initState();
    startTime();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Center(
        child: new Container(
          child: new Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              new Image.asset(
                'assets/images/logo.png',
                width: 200,
                height: 200,
              ),
              new Text(
                "",
              ),
            new Text(
              "Aar Sunu Jigueen Gni, Moy Aar Société Bi",
              style:
              new TextStyle(color: Colors.blue, fontSize: 20.0),
            ),
              new Container(
                padding: EdgeInsets.fromLTRB(0, 80, 0, 0),
                child: new CircularProgressIndicator(
                  backgroundColor: Colors.black,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}