import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { useState as x, useRef as b, useEffect as w } from "react";
import { useSettings as S, useViewport as C, useSystem as T } from "@mywallpaper/sdk-react";
function N() {
  const n = S(), { width: M, height: h } = C(), e = T(), [m, p] = x(Date.now()), a = b(), f = () => {
    const t = n.refreshInterval || "3s";
    return parseInt(t) * 1e3;
  };
  w(() => {
    const t = f();
    return a.current = setInterval(() => {
      p(Date.now());
    }, t), () => {
      a.current && clearInterval(a.current);
    };
  }, [n.refreshInterval]);
  const v = n.backgroundColor || "#1a1a2e", g = n.textColor || "#00ff88", i = n.accentColor || "#00ccff", u = n.transparency ?? 0.85, d = (t) => {
    if (t === 0) return "0 B";
    const l = 1024, y = ["B", "KB", "MB", "GB", "TB"], c = Math.floor(Math.log(t) / Math.log(l));
    return parseFloat((t / Math.pow(l, c)).toFixed(1)) + " " + y[c];
  }, s = (t) => d(t) + "/s";
  return /* @__PURE__ */ o(
    "div",
    {
      className: "system-monitor",
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: v,
        opacity: u,
        color: g,
        fontFamily: '"Monaco", "Courier New", monospace',
        fontSize: `${Math.max(10, Math.min(14, h / 20))}px`,
        padding: "12px",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      },
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            style: {
              fontSize: "1.2em",
              fontWeight: "bold",
              color: i,
              borderBottom: `1px solid ${i}`,
              paddingBottom: "6px",
              marginBottom: "4px"
            },
            children: "SYSTEM MONITOR"
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            },
            children: [
              n.showCPU !== !1 && e.cpu && /* @__PURE__ */ o("div", { className: "metric", children: [
                /* @__PURE__ */ r("div", { style: { color: i, fontWeight: "bold" }, children: "CPU" }),
                /* @__PURE__ */ o("div", { children: [
                  "Cores: ",
                  e.cpu.cores
                ] }),
                /* @__PURE__ */ o("div", { children: [
                  "Usage: ",
                  e.cpu.usage.toFixed(1),
                  "%"
                ] }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#333",
                      marginTop: "2px",
                      overflow: "hidden",
                      borderRadius: "2px"
                    },
                    children: /* @__PURE__ */ r(
                      "div",
                      {
                        style: {
                          height: "100%",
                          width: `${Math.min(100, e.cpu.usage)}%`,
                          backgroundColor: e.cpu.usage > 80 ? "#ff4444" : i,
                          transition: "width 0.3s ease"
                        }
                      }
                    )
                  }
                )
              ] }),
              n.showMemory !== !1 && e.memory && /* @__PURE__ */ o("div", { className: "metric", children: [
                /* @__PURE__ */ r("div", { style: { color: i, fontWeight: "bold" }, children: "MEMORY" }),
                /* @__PURE__ */ o("div", { children: [
                  "Used: ",
                  d(e.memory.used),
                  " /",
                  " ",
                  d(e.memory.total)
                ] }),
                /* @__PURE__ */ o("div", { children: [
                  "Free: ",
                  d(e.memory.free)
                ] }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#333",
                      marginTop: "2px",
                      overflow: "hidden",
                      borderRadius: "2px"
                    },
                    children: /* @__PURE__ */ r(
                      "div",
                      {
                        style: {
                          height: "100%",
                          width: `${e.memory.used / e.memory.total * 100}%`,
                          backgroundColor: e.memory.used / e.memory.total * 100 > 80 ? "#ff4444" : i,
                          transition: "width 0.3s ease"
                        }
                      }
                    )
                  }
                )
              ] }),
              n.showBattery !== !1 && e.battery && /* @__PURE__ */ o("div", { className: "metric", children: [
                /* @__PURE__ */ r("div", { style: { color: i, fontWeight: "bold" }, children: "BATTERY" }),
                /* @__PURE__ */ o("div", { children: [
                  "Level: ",
                  (e.battery.level * 100).toFixed(0),
                  "%",
                  e.battery.charging && " ⚡ CHARGING"
                ] }),
                e.battery.health !== void 0 && /* @__PURE__ */ o("div", { children: [
                  "Health: ",
                  (e.battery.health * 100).toFixed(0),
                  "%"
                ] }),
                /* @__PURE__ */ r(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#333",
                      marginTop: "2px",
                      overflow: "hidden",
                      borderRadius: "2px"
                    },
                    children: /* @__PURE__ */ r(
                      "div",
                      {
                        style: {
                          height: "100%",
                          width: `${e.battery.level * 100}%`,
                          backgroundColor: e.battery.level < 0.2 ? "#ff4444" : e.battery.level < 0.5 ? "#ffaa00" : i,
                          transition: "width 0.3s ease"
                        }
                      }
                    )
                  }
                )
              ] }),
              n.showDisk === !0 && e.disk && e.disk.length > 0 && /* @__PURE__ */ o("div", { className: "metric", children: [
                /* @__PURE__ */ r("div", { style: { color: i, fontWeight: "bold" }, children: "DISK" }),
                e.disk.map((t, l) => /* @__PURE__ */ o("div", { style: { fontSize: "0.9em", marginBottom: "4px" }, children: [
                  /* @__PURE__ */ r("div", { children: t.name }),
                  /* @__PURE__ */ o("div", { children: [
                    d(t.available),
                    " / ",
                    d(t.total),
                    " free"
                  ] }),
                  /* @__PURE__ */ r(
                    "div",
                    {
                      style: {
                        width: "100%",
                        height: "3px",
                        backgroundColor: "#333",
                        marginTop: "1px",
                        overflow: "hidden",
                        borderRadius: "1px"
                      },
                      children: /* @__PURE__ */ r(
                        "div",
                        {
                          style: {
                            height: "100%",
                            width: `${(t.total - t.available) / t.total * 100}%`,
                            backgroundColor: (t.total - t.available) / t.total * 100 > 80 ? "#ff4444" : i
                          }
                        }
                      )
                    }
                  )
                ] }, l))
              ] }),
              n.showNetwork === !0 && e.network && e.network.length > 0 && /* @__PURE__ */ o("div", { className: "metric", children: [
                /* @__PURE__ */ r("div", { style: { color: i, fontWeight: "bold" }, children: "NETWORK" }),
                e.network.map((t, l) => /* @__PURE__ */ o("div", { style: { fontSize: "0.9em", marginBottom: "4px" }, children: [
                  /* @__PURE__ */ r("div", { children: t.name }),
                  /* @__PURE__ */ o("div", { children: [
                    "↓ ",
                    s(t.received / 1e3)
                  ] }),
                  /* @__PURE__ */ o("div", { children: [
                    "↑ ",
                    s(t.transmitted / 1e3)
                  ] })
                ] }, l))
              ] }),
              !e.cpu && !e.memory && !e.battery && /* @__PURE__ */ o("div", { style: { color: "#ff6666", fontSize: "0.9em", marginTop: "8px" }, children: [
                "⚠ System data unavailable",
                /* @__PURE__ */ r("div", { style: { fontSize: "0.85em", marginTop: "4px", color: "#aaa" }, children: "Running in browser mode or desktop app not connected" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            style: {
              fontSize: "0.8em",
              color: "#666",
              borderTop: `1px solid ${i}33`,
              paddingTop: "4px",
              marginTop: "4px"
            },
            children: [
              "Updated: ",
              new Date(m).toLocaleTimeString()
            ]
          }
        )
      ]
    }
  );
}
export {
  N as default
};
