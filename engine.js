export const ROUND_MS=30000;
export function targetFor(hits){return [.61,.72,.48,.66][Math.min(3,Math.floor(hits/3))];}
export function chargeAt(elapsed,hits=0){const cycle=Math.max(1050,1550-Math.floor(hits/3)*120);const t=(Math.max(0,elapsed)%cycle)/cycle;return t<.5?t*2:2-t*2;}
export function judge(power,target,hits,combo){const error=Math.abs(power-target);const width=Math.max(.065,.10-Math.floor(hits/3)*.008);const made=error<=width;const perfect=made&&error<=.026;return {made,perfect,points:made?(perfect?3:2)+(combo+1>=3?1:0):0,error};}
export function createRound(){return {state:'ready',score:0,shots:0,hits:0,combo:0,maxCombo:0,perfect:0,remaining:ROUND_MS};}
export function recordShot(round,result){round.shots++;if(result.made){round.hits++;round.combo++;round.maxCombo=Math.max(round.maxCombo,round.combo);round.score+=result.points;if(result.perfect)round.perfect++;}else round.combo=0;}
