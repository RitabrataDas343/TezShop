import * as config from "./config.json"
export const setAll = (Tezos, {name, cause, comp, price}, setStatus) =>
  Tezos.wallet
    .at(config.contractAddr)
    .then((contract) => {
      return contract.methods.set(name, cause, comp, price).send();
    })
    .then((op) => {
      setStatus(`Awaiting to be confirmed..`);
      return op.confirmation(1).then(() => op.opHash);
    })
    .then((hash) =>
      setStatus(
        `Operation injected: <a target="#" href="https://florencenet.tzkt.io/${hash}">check here</a>`
      )
    );

export const addDonation = (Tezos, {ids, money, dest}, setStatus) =>
Tezos.wallet
    .at(config.contractAddr)
    .then((contract) => {
    return contract.methods.vaccReq(ids, money, dest).send();
    })
    .then((op) => {
    setStatus(`Awaiting to be confirmed..`);
    return op.confirmation(1).then(() => op.opHash);
    })
    .then((hash) =>
    setStatus(
        `Operation injected: <a target="#" href="https://florencenet.tzkt.io/${hash}">check here</a>`
    )
    );

export const getValue = (Tezos) =>
  Tezos.wallet
    .at(config.contractAddr)
    .then((contract) => contract.storage())
    .then((storage) => {
      return storage.toString();
    });