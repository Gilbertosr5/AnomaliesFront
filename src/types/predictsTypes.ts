export type PredictJSON = {
  proto: string;
  state: string;
  dur: number | null;
  sbytes: number | null;
  dbytes: number | null;
}

export type PredictFile = {
  input_data: {
    dur: number;
    proto: string;
    service: string;
    state: string;
    spkts: number;
    dpkts: number;
    sbytes: number;
    dbytes: number;
    rate: number;
    sttl: number;
    dttl: number;
    sload: number;
    dload: number;
    sloss: number;
    dloss: number;
    sinpkt: number;
    dinpkt: number;
    sjit: number;
    djit: number;
    swin: number;
    stcpb: number;
    dtcpb: number;
    dwin: number;
    tcprtt: number;
    synack: number;
    ackdat: number;
    smean: number;
    dmean: number;
    trans_depth: number;
    response_body_len: number;
    ct_srv_src: number;
    ct_state_ttl: number;
    ct_dst_ltm: number;
    ct_src_dport_ltm: number;
    ct_dst_sport_ltm: number;
    ct_dst_src_ltm: number;
    is_ftp_login: number;
    ct_ftp_cmd: number;
    ct_flw_http_mthd: number;
    ct_src_ltm: number;
    ct_srv_dst: number;
    is_sm_ips_ports: number;
  },
  result: {
    prediction: string;
    is_anomaly: boolean;
    confidence: number;
    probabilities: {
      Backdoor: number;
      Normal: number;
      Worms:number;
    }
  }
}