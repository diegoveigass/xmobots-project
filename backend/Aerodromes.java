package backend;

import java.util.Date;

public class Aerodromes {
  String name;
  String city;
  String description;
  Date createdAt = new Date();
  Runway runway = new Runway();
}
