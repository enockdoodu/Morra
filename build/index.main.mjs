// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0, ctc1, ctc2],
      6: [ctc0, ctc1, ctc0, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function PlayerOne(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerOne expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerOne expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v137 = stdlib.protect(ctc0, interact.wager, 'for PlayerOne\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v137],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v141], secs: v143, time: v142, didSend: v29, from: v140 } = txn1;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v141], secs: v143, time: v142, didSend: v29, from: v140 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v38, from: v148 } = txn2;
  ;
  let v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v154 = v149;
  
  let txn3 = txn2;
  while (await (async () => {
    const v169 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    
    return v169;})()) {
    const v172 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:64:56:application',
      fs: ['at ./index.rsh:63:19:application call to [unknown function] (defined at: ./index.rsh:63:23:function exp)'],
      msg: 'getHand',
      who: 'PlayerOne'
      });
    const v173 = stdlib.protect(ctc0, await interact.guessOutcome(), {
      at: './index.rsh:65:52:application',
      fs: ['at ./index.rsh:63:19:application call to [unknown function] (defined at: ./index.rsh:63:23:function exp)'],
      msg: 'guessOutcome',
      who: 'PlayerOne'
      });
    const v174 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:66:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:63:19:application call to [unknown function] (defined at: ./index.rsh:63:23:function exp)'],
      msg: 'random',
      who: 'PlayerOne'
      });
    const v175 = stdlib.digest([ctc0, ctc0], [v174, v173]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v140, v141, v148, v172, v175],
      evt_cnt: 2,
      funcNum: 3,
      lct: v154,
      onlyIf: true,
      out_tys: [ctc0, ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:72:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v178, v179], secs: v181, time: v180, didSend: v66, from: v177 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v178, v179], secs: v181, time: v180, didSend: v66, from: v177 } = txn4;
    ;
    const v182 = stdlib.addressEq(v140, v177);
    stdlib.assert(v182, {
      at: './index.rsh:72:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PlayerOne'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v188, v189], secs: v191, time: v190, didSend: v78, from: v187 } = txn5;
    ;
    const v192 = stdlib.addressEq(v148, v187);
    stdlib.assert(v192, {
      at: './index.rsh:79:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PlayerOne'
      });
    const v193 = stdlib.safeAdd(v178, v188);
    const txn6 = await (ctc.sendrecv({
      args: [v140, v141, v148, v179, v189, v193, v173, v174],
      evt_cnt: 2,
      funcNum: 5,
      lct: v190,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:87:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v197, v198], secs: v200, time: v199, didSend: v89, from: v196 } = txn6;
        
        ;
        
        const v209 = stdlib.eq(v197, v189);
        const v211 = stdlib.eq(v197, v193);
        const v213 = stdlib.eq(v189, v193);
        const v227 = v213 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const v228 = v211 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v227;
        const v208 = v209 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v228;
        const cv153 = v208;
        const cv154 = v199;
        
        await (async () => {
          const v153 = cv153;
          const v154 = cv154;
          
          if (await (async () => {
            const v169 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            
            return v169;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v214 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, '2'), v141);
            const v215 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v216 = v215 ? v140 : v148;
            sim_r.txns.push({
              kind: 'from',
              to: v216,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc1, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v197, v198], secs: v200, time: v199, didSend: v89, from: v196 } = txn6;
    ;
    const v201 = stdlib.addressEq(v140, v196);
    stdlib.assert(v201, {
      at: './index.rsh:87:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PlayerOne'
      });
    const v202 = stdlib.digest([ctc0, ctc0], [v198, v197]);
    const v203 = stdlib.digestEq(v179, v202);
    stdlib.assert(v203, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:88:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'PlayerOne'
      });
    stdlib.protect(ctc2, await interact.Total(v193), {
      at: './index.rsh:92:21:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:37:function exp)'],
      msg: 'Total',
      who: 'PlayerOne'
      });
    
    const v209 = stdlib.eq(v197, v189);
    const v211 = stdlib.eq(v197, v193);
    const v213 = stdlib.eq(v189, v193);
    const v227 = v213 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    const v228 = v211 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v227;
    const v208 = v209 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v228;
    const cv153 = v208;
    const cv154 = v199;
    
    v153 = cv153;
    v154 = cv154;
    
    txn3 = txn6;
    continue;
    
    
    
    
    
    }
  const v214 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, '2'), v141);
  const v215 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v216 = v215 ? v140 : v148;
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v153), {
    at: './index.rsh:114:24:application',
    fs: ['at ./index.rsh:112:7:application call to [unknown function] (defined at: ./index.rsh:112:35:function exp)'],
    msg: 'seeOutcome',
    who: 'PlayerOne'
    });
  
  return;
  
  
  
  
  };
export async function PlayerTwo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerTwo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerTwo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v141], secs: v143, time: v142, didSend: v29, from: v140 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v141), {
    at: './index.rsh:53:25:application',
    fs: ['at ./index.rsh:52:17:application call to [unknown function] (defined at: ./index.rsh:52:21:function exp)'],
    msg: 'acceptWager',
    who: 'PlayerTwo'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v140, v141],
    evt_cnt: 0,
    funcNum: 1,
    lct: v142,
    onlyIf: true,
    out_tys: [],
    pay: [v141, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v150, time: v149, didSend: v38, from: v148 } = txn2;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v154 = v149;
      
      if (await (async () => {
        const v169 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        
        return v169;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v214 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, '2'), v141);
        const v215 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v216 = v215 ? v140 : v148;
        sim_r.txns.push({
          kind: 'from',
          to: v216,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v38, from: v148 } = txn2;
  ;
  let v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v154 = v149;
  
  let txn3 = txn2;
  while (await (async () => {
    const v169 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    
    return v169;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v178, v179], secs: v181, time: v180, didSend: v66, from: v177 } = txn4;
    ;
    const v182 = stdlib.addressEq(v140, v177);
    stdlib.assert(v182, {
      at: './index.rsh:72:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PlayerTwo'
      });
    const v185 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:76:56:application',
      fs: ['at ./index.rsh:75:19:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)'],
      msg: 'getHand',
      who: 'PlayerTwo'
      });
    const v186 = stdlib.protect(ctc0, await interact.guessOutcome(), {
      at: './index.rsh:77:62:application',
      fs: ['at ./index.rsh:75:19:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)'],
      msg: 'guessOutcome',
      who: 'PlayerTwo'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v140, v141, v148, v178, v179, v185, v186],
      evt_cnt: 2,
      funcNum: 4,
      lct: v180,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v188, v189], secs: v191, time: v190, didSend: v78, from: v187 } = txn5;
        
        ;
        const v193 = stdlib.safeAdd(v178, v188);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v188, v189], secs: v191, time: v190, didSend: v78, from: v187 } = txn5;
    ;
    const v192 = stdlib.addressEq(v148, v187);
    stdlib.assert(v192, {
      at: './index.rsh:79:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PlayerTwo'
      });
    const v193 = stdlib.safeAdd(v178, v188);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v197, v198], secs: v200, time: v199, didSend: v89, from: v196 } = txn6;
    ;
    const v201 = stdlib.addressEq(v140, v196);
    stdlib.assert(v201, {
      at: './index.rsh:87:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PlayerTwo'
      });
    const v202 = stdlib.digest([ctc0, ctc0], [v198, v197]);
    const v203 = stdlib.digestEq(v179, v202);
    stdlib.assert(v203, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:88:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'PlayerTwo'
      });
    stdlib.protect(ctc1, await interact.Total(v193), {
      at: './index.rsh:92:21:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:37:function exp)'],
      msg: 'Total',
      who: 'PlayerTwo'
      });
    
    const v209 = stdlib.eq(v197, v189);
    const v211 = stdlib.eq(v197, v193);
    const v213 = stdlib.eq(v189, v193);
    const v227 = v213 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    const v228 = v211 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v227;
    const v208 = v209 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v228;
    const cv153 = v208;
    const cv154 = v199;
    
    v153 = cv153;
    v154 = cv154;
    
    txn3 = txn6;
    continue;
    
    
    
    
    
    }
  const v214 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, '2'), v141);
  const v215 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v216 = v215 ? v140 : v148;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v153), {
    at: './index.rsh:114:24:application',
    fs: ['at ./index.rsh:112:7:application call to [unknown function] (defined at: ./index.rsh:112:35:function exp)'],
    msg: 'seeOutcome',
    who: 'PlayerTwo'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAIAAECBSAIBAYmAgEAACI1ADEYQQLEKWRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAXlJIQYMQAEHSSUMQACCJRJEIQc0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf+BaFs1/oFwWzX9STUFSSJbNfwhBVs1+4AEs1H3jzT8FlA0+xZQsDT/MQASRDQDV0ggNPsWNPwWUAESRDT/NAMhBFs0A1coICQiNP40/RJNIzT8NP0STSQ0/DT+Ek0yBkIBbkglNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf5XKCA1/VdQIDX8STUFSSJbNfshBVs1+oAEEEatczT7FlA0+hZQsDT9MQASRDQDgUhbNPsINfk0/zT+FlA0/VA0/FA0+hZQNPkWUChLAVcAeGdIIQc1ATIGNQJCAVNIIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9STUFSSJbNfxXCCA1+4AE9bp4JjT8FlA0+1CwNP8xABJENP80/hZQNP1QNPwWUDT7UChLAVcAcGdIJTUBMgY1AkIA6EkjDEAAOCMSRCM0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASai5F0sDT/iAEKNANXACA0/zEAJDIGQgBGSIGgjQaIAPMiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gAzTEANP8WUChLAVcAKGdIIzUBMgY1AkIAZDX/Nf41/TX8Nfs0/iQSQQAcNPs0/BZQNP1QKEsBVwBIZ0ghBjUBMgY1AkIAN7EisgEkNPwLsggjshA0/TT7NP4jEk2yB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001348380380620013488339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61109a80620002ae6000396000f3fe60806040526004361061006e5760003560e01c8063ab53f2c61161004b578063ab53f2c6146100c3578063ad2d91d1146100e6578063aff5115f146100f9578063ebdbfdcc1461010c57005b80631e93b0f1146100775780632c10a1591461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610c96565b61011f565b3480156100ba57600080fd5b50600154610088565b3480156100cf57600080fd5b506100d8610281565b604051610092929190610cae565b6100756100f4366004610d1d565b61031e565b610075610107366004610d1d565b610531565b61007561011a366004610d1d565b61073c565b61012f6001600054146009610992565b6101498135158061014257506001548235145b600a610992565b60008080556002805461015b90610d40565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610d40565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610d91565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610df6565b60405180910390a1610238816020015134146008610992565b610240610b7c565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160029052514391015261027c816109bc565b505050565b60006060600054600280805461029690610d40565b80601f01602080910402602001604051908101604052809291908181526020018280546102c290610d40565b801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b50505050509050915091509091565b61032e600460005414600d610992565b6103488135158061034157506001548235145b600e610992565b60008080556002805461035a90610d40565b80601f016020809104026020016040519081016040528092919081815260200182805461038690610d40565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b50505050508060200190518101906103eb9190610e33565b90507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634338360405161041e929190610ea6565b60405180910390a16104323415600b610992565b805161044a906001600160a01b03163314600c610992565b61048e6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081528884013560608089019182528a8401356080808b01918252600560005543600155855197880198909852945193860193909352905190951690830152925191810191909152905160a082015260c0016040516020818303038152906040526002908051906020019061052b929190610bc7565b50505050565b6105416006600054146016610992565b61055b8135158061055457506001548235145b6017610992565b60008080556002805461056d90610d40565b80601f016020809104026020016040519081016040528092919081815260200182805461059990610d40565b80156105e65780601f106105bb576101008083540402835291602001916105e6565b820191906000526020600020905b8154815290600101906020018083116105c957829003601f168201915b50505050508060200190518101906105fe9190610ed7565b90507f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663383604051610631929190610ea6565b60405180910390a161064534156013610992565b805161065d906001600160a01b031633146014610992565b604080516106aa916106849190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146015610992565b6106b2610b7c565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091526080830151908401351461071f5760a0820151602084013514610718578160a00151826080015114610711576002610722565b6000610722565b6001610722565b60025b602080830180519290925290514391015261027c816109bc565b61074c6005600054146011610992565b6107668135158061075f57506001548235145b6012610992565b60008080556002805461077890610d40565b80601f01602080910402602001604051908101604052809291908181526020018280546107a490610d40565b80156107f15780601f106107c6576101008083540402835291602001916107f1565b820191906000526020600020905b8154815290600101906020018083116107d457829003601f168201915b50505050508060200190518101906108099190610f6b565b90506108216040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610852929190610ea6565b60405180910390a16108663415600f610992565b6040820151610881906001600160a01b031633146010610992565b6060820151610894906020850135610aca565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b039081168252602080850151818401526040808601519092168284015260808086015160608501528683013590840152835160a084015260066000554360015590516109679183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b6040516020818303038152906040526002908051906020019061098b929190610bc7565b5050505050565b816109b85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60208101515160021415610a4d576040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261027c9260029290910190610bc7565b602081015151600114610a6557805160400151610a69565b8051515b6001600160a01b03166108fc610a886002846000015160200151610b1d565b6040518115909202916000818181858888f19350505050158015610ab0573d6000803e3d6000fd5b5060008080556001819055610ac790600290610c4b565b50565b600082610ad7838261100b565b9150811015610b175760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016109af565b92915050565b6000811580610b4157508282610b338183611023565b9250610b3f9083611042565b145b610b175760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016109af565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610bc2604051806040016040528060008152602001600081525090565b905290565b828054610bd390610d40565b90600052602060002090601f016020900481019282610bf55760008555610c3b565b82601f10610c0e57805160ff1916838001178555610c3b565b82800160010185558215610c3b579182015b82811115610c3b578251825591602001919060010190610c20565b50610c47929150610c81565b5090565b508054610c5790610d40565b6000825580601f10610c67575050565b601f016020900490600052602060002090810190610ac791905b5b80821115610c475760008155600101610c82565b600060408284031215610ca857600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610ce257858101830151858201606001528201610cc6565b81811115610cf4576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610ca857600080fd5b600060608284031215610d2f57600080fd5b610d398383610d0b565b9392505050565b600181811c90821680610d5457607f821691505b60208210811415610ca857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d8c57600080fd5b919050565b600060408284031215610da357600080fd5b6040516040810181811067ffffffffffffffff82111715610dd457634e487b7160e01b600052604160045260246000fd5b604052610de083610d75565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610e2457600080fd5b80604085015250509392505050565b600060608284031215610e4557600080fd5b6040516060810181811067ffffffffffffffff82111715610e7657634e487b7160e01b600052604160045260246000fd5b604052610e8283610d75565b815260208301516020820152610e9a60408401610d75565b60408201529392505050565b6001600160a01b038316815260808101610d3960208301848035825260208082013590830152604090810135910152565b600060c08284031215610ee957600080fd5b60405160c0810181811067ffffffffffffffff82111715610f1a57634e487b7160e01b600052604160045260246000fd5b604052610f2683610d75565b815260208301516020820152610f3e60408401610d75565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060a08284031215610f7d57600080fd5b60405160a0810181811067ffffffffffffffff82111715610fae57634e487b7160e01b600052604160045260246000fd5b604052610fba83610d75565b815260208301516020820152610fd260408401610d75565b604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561101e5761101e610ff5565b500190565b600081600019048311821515161561103d5761103d610ff5565b500290565b60008261105f57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220dc7ec12f6c369c98a12534ffb3f348d1f904272668188987820ae779c659647164736f6c634300080c0033`,
  BytecodeLen: 4936,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:109:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:62:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "PlayerOne": PlayerOne,
  "PlayerTwo": PlayerTwo
  };
export const _APIs = {
  };
