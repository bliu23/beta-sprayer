const GYMS = ["Mission Cliffs", "Dogpatch Boulders", "Planet Granite SF", "Cliffs of Id", "Hangar 18 Hawthorne", "Mesa Rim South"]

function getGym() {
  return GYMS[Math.floor(Math.random() * GYMS.length)]
}

module.exports = {
  getGym
}
