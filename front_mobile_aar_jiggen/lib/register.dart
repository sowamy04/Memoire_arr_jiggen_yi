import 'package:flutter/material.dart';

class SignUpScreen extends StatefulWidget {
  @override
  _SignUpScreenState createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      theme: new ThemeData(
          primaryColor: Color(0xff0B5AE3),
          primarySwatch: Colors.brown,
          accentColor: Colors.white),
      title: "Insciption",
      home: SignUpUI(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class SignUpUI extends StatefulWidget {
  @override
  _SignUpUIState createState() => _SignUpUIState();
}

class _SignUpUIState extends State<SignUpUI> {
  BuildContext context;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  bool _autoValidate = false;
  String _fname;
  String _lname;
  String _mobile;
  String _email;
  String _password;
  String _conpassword;
  String _address;
  String _groupValue;

  final _fnameController = TextEditingController();
  final _lnameController = TextEditingController();
  final _mobileController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _conPasswordController = TextEditingController();
  final _addressController = TextEditingController();
  //final _genreController = TextEditingController();

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
            padding: EdgeInsets.fromLTRB(25, 60.0, 25, 20),
            child: new Column(
              children: <Widget>[
                new CircleAvatar(
                  backgroundImage: new NetworkImage(
                      "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg"),
                  radius: 55.0,
                ),
                new Padding(padding: EdgeInsets.fromLTRB(0, 20, 0, 0)),
                new Form(
                  key: _formKey,
                  autovalidate: _autoValidate,
                  child: FormUI(),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void showAlert() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          // Retrieve the text the user has typed in using our
          // TextEditingController
          title: new Text("Inscription"),
          content: new Text(" Prénom :" +
              _fnameController.text +
              "\n Nom : " +
              _lnameController.text +
              "\n Numéro de téléphone : " +
              _mobileController.text +
              "\n Email : " +
              _emailController.text +
              "\n Mot de passe : " +
              _passwordController.text +
              "\n Adresse : " +
              _addressController.text +
              "\n Genre : " +
              _groupValue),
          actions: <Widget>[
            FlatButton(
                child: Text('annuler'),
                onPressed: () {
                  Navigator.of(context).pop();
                }),
            FlatButton(
                child: Text('Ok'),
                onPressed: () {
                  _fnameController.clear();
                  _lnameController.clear();
                  _mobileController.clear();
                  _emailController.clear();
                  _passwordController.clear();
                  _conPasswordController.clear();
                  _addressController.clear();
                  // _genreController.clear();
                  //_groupValue = '';
                  Navigator.of(context).pop();
                })
          ],
        );
      },
    );
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

  void _handleGenderChange(String val) {
    setState(() {
      _groupValue = val;
    });
  }

  Widget FormUI() {
    return new Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        new TextFormField(
          controller: _fnameController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: 'Prénom',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.account_box),
          ),
          keyboardType: TextInputType.text,
          validator: validateName,
          onSaved: (String val) {
            _fname = val;
          },
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        new TextFormField(
          controller: _lnameController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: 'Nom',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.account_box),
          ),
          keyboardType: TextInputType.text,
          validator: validateNom,
          onSaved: (String val) {
            _lname = val;
          },
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        new TextFormField(
          controller: _mobileController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: 'Numéro de téléphone',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.add_call),
          ),
          keyboardType: TextInputType.phone,
          validator: validateMobile,
          onSaved: (String val) {
            _mobile = val;
          },
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        new TextFormField(
          controller: _emailController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: 'Email',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.alternate_email),
          ),
          keyboardType: TextInputType.emailAddress,
          validator: validateEmail,
          onSaved: (String val) {
            _email = val;
          },
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        new TextFormField(
          obscureText: true,
          controller: _passwordController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: 'Mot de passe',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.pages),
          ),
          keyboardType: TextInputType.text,
          validator: validatePassword,
          onSaved: (String val) {
            _password = val;
          },
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        new TextFormField(
          obscureText: true,
          controller: _conPasswordController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: 'Confirmation mot de passe',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.pages),
          ),
          keyboardType: TextInputType.text,
          validator: validateConPassword,
          onSaved: (String val) {
            _conpassword = val;
          },
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        new TextFormField(
          controller: _addressController,
          textInputAction: TextInputAction.done,
          decoration: const InputDecoration(
            labelText: 'Adresse',
            labelStyle: TextStyle(
                fontSize: 17, color: Colors.black, fontWeight: FontWeight.bold),
            icon: Icon(Icons.home),
          ),
          keyboardType: TextInputType.text,
          onSaved: (String val) {
            _address = val;
          },
        ),
        Padding(padding: const EdgeInsets.fromLTRB(0, 10, 0, 0)),
        Container(
          child: Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  Text('Genre:',
                      style: TextStyle(
                          fontSize: 17,
                          color: Colors.black,
                          fontWeight: FontWeight.bold)),
                  Expanded(
                    flex: 1,
                    child: RadioListTile(
                      value: "homme",
                      groupValue: _groupValue,
                      //onChanged:
                      //  _handleGenderChange /* (newValue) =>
                      //setState(() => _groupValue = newValue) */
                      //,
                      title: Text("Homme"),
                      activeColor: Color(0xff0B5AE3),
                      onChanged: (val) {
                        print("$val");
                        _handleGenderChange(val);
                      },
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: RadioListTile(
                      value: "femme",
                      title: Text('Femme'),
                      groupValue: _groupValue,
                      //onChanged:
                      //  _handleGenderChange /* (newValue) =>
                      // setState(() => _groupValue = newValue) */
                      //,
                      activeColor: Color(0xff0B5AE3),
                      onChanged: (val) {
                        print("$val");
                        _handleGenderChange(val);
                      },
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
        Padding(padding: const EdgeInsets.fromLTRB(0, 20, 0, 0)),
        ButtonTheme(
          buttonColor: Color(0xff0B5AE3),
          minWidth: 300,
          height: 50.0,
          child: RaisedButton(
              onPressed: _validateInputs,
              child: new Text(
                "S'INSCRIRE",
                style: new TextStyle(color: Colors.white, fontSize: 20.0),
              )),
          shape: new RoundedRectangleBorder(
              borderRadius: new BorderRadius.circular(30.0)),
        ),
      ],
    );
  }

  String validateName(String value) {
    if (value.length < 3)
      return 'le prénom doit avoir au moins 3 caractères';
    else
      return null;
  }

  String validateNom(String value) {
    if (value.length < 2)
      return 'le nom doit avoir au moins 2 caractères';
    else
      return null;
  }

  String validateMobile(String value) {
    if (value.length != 9)
      return 'Le numéro est composé de 9 chiffres';
    else
      return null;
  }

  String validateEmail(String value) {
    Pattern pattern =
        r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
    RegExp regex = new RegExp(pattern);
    if (!regex.hasMatch(value))
      return 'Entrer un email valide SVP!';
    else
      return null;
  }

  String validatePassword(String value) {
    if (value.trim().length < 6)
      return 'Le passe doit contenir au moins 6 caractères';
    else
      return null;
  }

  String validateConPassword(String value) {
    String pass = _passwordController.text;
    String conpass = _conPasswordController.text;

    print(pass);
    print(conpass);

    if (pass != conpass)
      return 'Le passe et le passe de confirmation sont différents';
    else
      return null;
  }
}