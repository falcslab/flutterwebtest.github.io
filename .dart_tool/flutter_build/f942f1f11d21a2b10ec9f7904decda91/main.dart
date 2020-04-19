import 'dart:ui' as ui;

import 'package:flutter_web.examples.gallery/main.dart' as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
