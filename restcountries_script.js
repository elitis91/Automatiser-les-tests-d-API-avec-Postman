const json = pm.response.json();

// Premier pays retourné
const country = json.data.objects[0];

// Nom
pm.environment.set(
    "country_name",
    country.names?.common || ""
);

// Code ISO Alpha-2
pm.environment.set(
    "country_iso2",
    country.codes?.alpha_2 || ""
);

// Code ISO Alpha-3
pm.environment.set(
    "country_iso3",
    country.codes?.alpha_3 || ""
);

// Devise
pm.environment.set(
    "country_currency",
    country.currencies?.[0]?.code || ""
);

// Langue
pm.environment.set(
    "country_language",
    country.languages?.[0]?.name || ""
);

// Capitale
pm.environment.set(
    "country_capital",
    country.capitals?.[0]?.name || ""
);

// Indicatif téléphonique
pm.environment.set(
    "country_calling_code",
    country.calling_codes?.[0] || ""
);

// Région
pm.environment.set(
    "country_region",
    country.region || ""
);

// Vérification dans la console
console.log("Variables enregistrées :");
console.log("Nom :", pm.environment.get("country_name"));
console.log("ISO2 :", pm.environment.get("country_iso2"));
console.log("ISO3 :", pm.environment.get("country_iso3"));
console.log("Devise :", pm.environment.get("country_currency"));
console.log("Langue :", pm.environment.get("country_language"));
console.log("Capitale :", pm.environment.get("country_capital"));
console.log("Indicatif :", pm.environment.get("country_calling_code"));
console.log("Région :", pm.environment.get("country_region"));