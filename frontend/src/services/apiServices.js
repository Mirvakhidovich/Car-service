import { services } from "../utils/constants";

export async function getServices() {
  return services;
}

export async function getService(id) {
  return services.find((service) => service.id === id);
}
