import React from "react";
import type { StreamDef, CalculatedRow } from "../utils/calc";
import { SLATE, PINK } from "../utils/colors";

interface TableTabProps {
  data: CalculatedRow[];
  streams: StreamDef[];
  sum: Record<string, number>;
}

const TableTab: React.FC<TableTabProps> = ({ data, streams, sum }) => {
  return (
    <div className="card" style={{ overflowX: "auto", padding: 0 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "#e2e8f0", fontSize: 13, textAlign: "left" }}>
        <thead>
          <tr style={{ background: "#0c1829", borderBottom: "2px solid #1e293b" }}>
            <th style={{ padding: "14px 20px", fontWeight: 700, color: SLATE, whiteSpace: "nowrap" }}>月</th>
            <th style={{ padding: "14px 20px", fontWeight: 700, textAlign: "right", color: SLATE, whiteSpace: "nowrap" }}>月次合計</th>
            {streams.map((s) => (
              <th key={s.key} style={{ padding: "14px 20px", fontWeight: 700, textAlign: "right", color: s.color, whiteSpace: "nowrap" }}>{s.label}</th>
            ))}
            <th style={{ padding: "14px 20px", fontWeight: 700, textAlign: "right", color: SLATE, whiteSpace: "nowrap" }}>累計合計</th>
          </tr>
        </thead>
        <tbody className="table-body-hover">
          {data.map((row, i) => (
            <tr key={row.m} className="table-row" style={{ borderBottom: "1px solid #1e293b50", background: i % 2 === 0 ? "transparent" : "#0f172a30" }}>
              <td style={{ padding: "12px 20px", color: row.isActual ? PINK : SLATE, fontWeight: 700, whiteSpace: "nowrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {row.mp}
                  {row.isActual && (
                    <span style={{ 
                      fontSize: 10, 
                      padding: "2px 6px", 
                      background: PINK + "20", 
                      color: PINK, 
                      borderRadius: 4, 
                      border: `1px solid ${PINK}40`,
                      fontWeight: 600
                    }}>実績</span>
                  )}
                </div>
              </td>
              <td style={{ padding: "12px 20px", textAlign: "right", fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{row.s_total}</div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>{(row.actualPvTotal || row.forecastPvTotal || 0).toLocaleString()} <span style={{ fontSize: 10 }}>PV</span></div>
              </td>
              {streams.map((s) => (
                <td key={s.key} style={{ padding: "12px 20px", textAlign: "right", fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>
                  <div style={{ color: s.color, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{row[`s_rev_${s.key}`]}</div>
                  <div style={{ fontSize: 11, opacity: 0.7, color: s.color }}>{row[`s_pv_${s.key}`]}</div>
                </td>
              ))}
              <td style={{ padding: "12px 20px", textAlign: "right", fontSize: 14, fontWeight: 700, color: SLATE, fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>{row.s_cum}</td>
            </tr>
          ))}
          <tr style={{ background: "#0c1829", fontWeight: 700, borderTop: "2px solid #1e293b" }}>
            <td style={{ padding: "16px 20px", color: SLATE }}>合計</td>
            <td style={{ padding: "16px 20px", textAlign: "right", fontSize: 15, color: SLATE, fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>
              <div style={{ color: "#fff" }}>¥{sum.total.toLocaleString()}</div>
            </td>
            {streams.map((s) => (
              <td key={s.key} style={{ padding: "16px 20px", textAlign: "right", fontSize: 13, color: s.color, fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>
                <div style={{ fontSize: 14 }}>¥{sum[s.key].toLocaleString()}</div>
                <div style={{ fontSize: 11, opacity: 0.8 }}>{(sum[`pv_${s.key}`] || 0).toLocaleString()} <span style={{ fontSize: 10 }}>PV</span></div>
              </td>
            ))}
            <td style={{ padding: "16px 20px", textAlign: "right", fontSize: 15, color: SLATE, fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>
              <div style={{ color: "#fff" }}>¥{sum.total.toLocaleString()}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTab;
