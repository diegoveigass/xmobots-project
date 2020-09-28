package backend;

import java.util.Date;

public class Aerodromes {
  String name;
  String city;
  String description;
  Date created_at = new Date();
  Runway runway = new Runway();
}
