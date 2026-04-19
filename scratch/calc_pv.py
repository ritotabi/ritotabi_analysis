import json

def calculate_pv(start_month, baseline_mature, m_seasonal):
    # Growth curve (ratio to mature PV)
    growth_curve = [
        0, 0.01, 0.03, 0.08, 0.15, 0.25, 0.40, 0.55, 0.70, 0.82, 0.92, 1.0,  # 1-12
        1.02, 1.04, 1.06, 1.08, 1.10, 1.12, 1.14, 1.16, 1.18, 1.20, 1.22, 1.24 # 13-24
    ]
    
    pv_list = []
    current_month = start_month
    for i in range(24):
        month_idx = (current_month - 1) % 12
        multiplier = m_seasonal[month_idx]
        base_val = baseline_mature * growth_curve[i]
        val = int(base_val * multiplier)
        pv_list.append(val)
        current_month += 1
    return pv_list

# Con Dao Seasonal (Jan=1, Dec=12)
condao_seasonal = [0.6, 0.7, 1.2, 1.3, 1.25, 1.2, 1.1, 1.0, 0.8, 0.6, 0.5, 0.6]

# Mature PV for Con Dao Running JP (Niche Target)
# Tier 3 mature is 100-1500. Let's aim for 800 (since it's a specific "running" topic, not "guide").
baseline_mature = 800

# Start April (4)
pp = calculate_pv(4, baseline_mature, condao_seasonal)
pn = [int(v * 0.8) for v in pp] # Pessimistic
po = [int(v * 1.3) for v in pp] # Optimistic

print(json.dumps({"pp": pp, "pn": pn, "po": po}))
