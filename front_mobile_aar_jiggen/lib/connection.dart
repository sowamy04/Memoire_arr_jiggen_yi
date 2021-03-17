import 'package:flutter/material.dart';
import 'package:front_mobile_aar_jiggen/register.dart';
import 'package:front_mobile_aar_jiggen/homePage.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      theme: new ThemeData(
          primaryColor: Color(0xff0B5AE3),
          primarySwatch: Colors.brown,
          accentColor: Colors.white),
      title: "Authentification",
      home: LoginPageUI(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class LoginPageUI extends StatefulWidget {
  @override
  _LoginPageUIState createState() => _LoginPageUIState();
}

class _LoginPageUIState extends State<LoginPageUI> {
  BuildContext context;
  final FocusNode _passwordFocusNode = new FocusNode();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  bool _autoValidate = false;

  @override
  Widget build(BuildContext context) {
    this.context = context;

    return new Scaffold(
      body: new GestureDetector(
        onTap: () {
          FocusScope.of(context).requestFocus(new FocusNode());
        },
        child: new SingleChildScrollView(
          child: new Container(
            padding: EdgeInsets.fromLTRB(30, 110.0, 30, 20),
            child: new Column(
              children: <Widget>[
                new CircleAvatar(
                  radius: 60.0,
                  backgroundImage: new NetworkImage(
                      "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg"),
                ),
                Padding(
                  padding: EdgeInsets.fromLTRB(0, 50, 0, 0),
                ),
                new Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    TextFormField(
                      onFieldSubmitted: (String value) {
                        FocusScope.of(context).requestFocus(_passwordFocusNode);
                      },
                      autofocus: true,
                      controller: _emailController,
                      keyboardType: TextInputType.emailAddress,
                      textInputAction: TextInputAction.next,
                      decoration:
                          InputDecoration(labelText: 'Numéro de téléphone'),
                    ),
                  ],
                ),
                Padding(
                  padding: EdgeInsets.fromLTRB(0, 20, 0, 0),
                ),
                new Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    TextFormField(
                        focusNode: _passwordFocusNode,
                        controller: _passwordController,
                        textInputAction: TextInputAction.done,
                        decoration: InputDecoration(labelText: 'Mot de passe'),
                        keyboardType: TextInputType.text,
                        obscureText: true),
                  ],
                ),
                Padding(padding: const EdgeInsets.fromLTRB(0, 40, 0, 0)),
                ButtonTheme(
                    buttonColor: Color(0xff0B5AE3),
                    minWidth: double.maxFinite,
                    height: 50.0,
                    child: RaisedButton(
                        onPressed: () {
                          //showAlert,
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => AccueilScreen()),
                          );
                        },
                        child: new Text(
                          "SE CONNECTER",
                          style: new TextStyle(
                              color: Colors.white, fontSize: 20.0),
                        )),
                    shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(30.0))),
                Padding(padding: const EdgeInsets.fromLTRB(0, 20, 0, 0)),
                ButtonTheme(
                  buttonColor: Colors.white,
                  minWidth: double.maxFinite,
                  height: 50.0,
                  child: RaisedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => SignUpScreen()),
                        );
                      },
                      child: new Text(
                        "S'INSCRIRE",
                        style: TextStyle(
                          color: Color(0xff0B5AE3),
                          fontFamily: 'Montserrat',
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                          letterSpacing: 1,
                        ),
                      )),
                  shape: new RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(60.0),
                      side: BorderSide(color: Color(0xff0B5AE3))),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  String validationChamp(String value) {
    if (value.length == 0)
      return 'Ce champ est obligatoire';
    else
      return null;
  }

    void _validateInputs() {
    if (_formKey.currentState.validate()) {
//    If all data are correct then save data to out variables
      _formKey.currentState.save();
      showAlert();
    } else {
//    If all data are not valid then start auto validation.
      setState(() {
        _autoValidate = true;
      });
    }
  }



  void showAlert() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          // Retrieve the text the user has typed in using our
          // TextEditingController
          title: new Text("Connexion"),
          content: new Text("Numéro de téléphone :" +
              _emailController.text +
              "\nMot de passe : " +
              _passwordController.text),
          actions: <Widget>[
            FlatButton(
                child: Text('Annuler'),
                onPressed: () {
                  Navigator.of(context).pop();
                }),
            FlatButton(
                child: Text('Ok'),
                onPressed: () {
                  _emailController.clear();
                  _passwordController.clear();
                  Navigator.of(context).pop();
                })
          ],
        );
      },
    );
  }
}