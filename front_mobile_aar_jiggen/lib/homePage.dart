import 'package:flutter/material.dart';
import 'package:front_mobile_aar_jiggen/avis.dart';
import 'package:front_mobile_aar_jiggen/geolocation.dart';
import 'package:front_mobile_aar_jiggen/itineraire.dart';
import 'package:front_mobile_aar_jiggen/meritoire.dart';
import 'package:front_mobile_aar_jiggen/statistiques.dart';
import 'package:front_mobile_aar_jiggen/tracker.dart';

class DrawerItem {
  String title;
  IconData icon;
  DrawerItem(this.title, this.icon);
}

class AccueilScreen extends StatefulWidget {
  final drawerItems = [
    new DrawerItem("Geolocation", Icons.location_on),
    new DrawerItem("Itinéraire", Icons.local_pizza),
    new DrawerItem("Personne de confiance", Icons.person),
    new DrawerItem("Tracker", Icons.info),
    new DrawerItem("Avis", Icons.info),
    new DrawerItem("Statisques", Icons.info)
  ];

  @override
  State<StatefulWidget> createState() {
    return new AccueilScreenState();
  }
}

class AccueilScreenState extends State<AccueilScreen> {
  int _selectedDrawerIndex = 0;
  String _value = "";

  _getDrawerItemWidget(int pos) {
    switch (pos) {
      case 0:
        return new GeolocationFragment();
      case 1:
        return new ItineraireFragment();
      case 2:
        return new MeritoireFragment();
      case 3:
        return new TrackerFragment();
      case 4:
        return new AvisFragment();
      case 5:
        return new StatistiquesFragment();

      default:
        return new GeolocationFragment();
    }
  }

  void handleClick(String value) {
    switch (value) {
      case 'Mes Informations':
        break;
      case 'Déconnexion':
        break;
    }
  }

  _onSelectItem(int index) {
    setState(() => _selectedDrawerIndex = index);
    Navigator.of(context).pop(); // close the drawer
  }

  @override
  Widget build(BuildContext context) {
    var drawerOptions = <Widget>[];
    for (var i = 0; i < widget.drawerItems.length; i++) {
      var d = widget.drawerItems[i];
      drawerOptions.add(new ListTile(
        leading: new Icon(d.icon),
        title: new Text(d.title),
        selected: i == _selectedDrawerIndex,
        onTap: () => _onSelectItem(i),
      ));
    }

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Aar Jiggen Gni"),
        actions: <Widget>[
          PopupMenuButton<String>(
            onSelected: handleClick,
            enabled: true,
            itemBuilder: (BuildContext context) {
              return {'Mes Informations', 'Déconnexion'}.map((String choice) {
                return PopupMenuItem<String>(
                  value: choice,
                  child: Text(choice),
                );
              }).toList();
            },
          ),
        ],
      ),
      drawer: new Drawer(
        child: new Column(
          children: <Widget>[
            new UserAccountsDrawerHeader(
              accountName: new Text("Amy SOW"),
              accountEmail: new Text("amysow04@gmail.com"),
              currentAccountPicture: CircleAvatar(
                backgroundColor: Colors.blueAccent,
                child: Text(
                  "A",
                  style: TextStyle(fontSize: 40.0),
                ),
              ),
            ),
            new Column(children: drawerOptions)
          ],
        ),
      ),
      body: _getDrawerItemWidget(_selectedDrawerIndex),
    );
  }
}
