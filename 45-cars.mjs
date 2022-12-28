function order_car(manufacturer, model, ...rest) {
  const car = { manufacturer, model, ...rest[0] };
  console.log("Car: ", car);
}

order_car("Toyota", "Yaris");
order_car("Suzuki", "Corolla");
order_car("Nisan", "YBR", { color: "Brown" });
order_car("Hyundai", "Sonata", { color: "Black" });
