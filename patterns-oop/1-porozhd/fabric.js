"use strict";
class TFInsurance {
    id;
    status;
    vehicle;
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    async submit() {
        const res = await fetch('tf', {
            method: 'POST',
            body: JSON.stringify({ vehicle: this.vehicle }),
        });
        const data = await res.json();
        return data.isSuccess;
    }
}
class ABInsurance {
    id;
    status;
    vehicle;
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    async submit() {
        const res = await fetch('ab', {
            method: 'POST',
            body: JSON.stringify({ vehicle: this.vehicle }),
        });
        const data = await res.json();
        return data.yes;
    }
}
//Fabric
class InsuranceFactory {
    db;
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
class TFInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new TFInsurance();
    }
}
class ABInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new ABInsurance();
    }
}
//Use
const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);
//Alt
const INSURANSE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance,
};
class InsuranceFactoryAlt {
    db;
    createInsurance(type) {
        return INSURANSE_TYPE[type];
    }
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
const insuranceFactoryAlt = new InsuranceFactoryAlt();
const ins2 = new (insuranceFactoryAlt.createInsurance('tf'))();
insuranceFactoryAlt.saveHistory(ins2);
