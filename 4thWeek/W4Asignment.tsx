

import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

function Bar({ w, color }: { w: number; color: string }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(w), 300);
    return () => clearTimeout(t);
  }, [w]);
  return (
    <View style={styles.barTrack}>
      <View style={[styles.barFill, { width: `${width}%` as any, backgroundColor: color }]} />
    </View>
  );
}

export default function AttendanceDashboard() {
  const stats = [
    { v: 32, l: "TOTAL",   bg: "#E8F0FE", c: "#1A73E8" },
    { v: 27, l: "PRESENT", bg: "#E6F4EA", c: "#1E8E3E" },
    { v: 3,  l: "ABSENT",  bg: "#FCE8E6", c: "#D93025" },
    { v: 2,  l: "LATE",    bg: "#FEF3E2", c: "#E37400" },
  ];

  const rates = [
    { l: "Overall Class", v: 84, c: "#1A73E8" },
    { l: "Target",        v: 75, c: "#1E8E3E" },
  ];

  return (
    <View style={styles.container}>

      {/* ── Header ── */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi Dear 👋</Text>
          <Text style={styles.title}>PRG-402 Dashboard</Text>
          <Text style={styles.subtitle}>Good Morning · Sun, Jun 1</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>T</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* ── Today's Session Banner ── */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerLabel}>TODAY'S SESSION</Text>
            <Text style={styles.bannerTime}>06:30 – 9:00 AM</Text>
            <Text style={styles.bannerRoom}>Room 501 · Block B</Text>
          </View>
          <TouchableOpacity style={styles.markBtn}>
            <Text style={styles.markBtnText}>Mark Now</Text>
          </TouchableOpacity>
        </View>

        {/* ── Today's Overview ── */}
        <Text style={styles.sectionLabel}>TODAY'S OVERVIEW</Text>
        <View style={styles.statRow}>
          {stats.map(s => (
            <View key={s.l} style={[styles.statCard, { backgroundColor: s.bg }]}>
              <Text style={[styles.statValue, { color: s.c }]}>{s.v}</Text>
              <Text style={[styles.statLabel, { color: s.c }]}>{s.l}</Text>
            </View>
          ))}
        </View>

        {/* ── Semester Attendance Rate ── */}
        <Text style={styles.sectionLabel}>SEMESTER ATTENDANCE RATE</Text>
        <View style={styles.card}>
          {rates.map((r, i) => (
            <View key={r.l} style={{ marginBottom: i < rates.length - 1 ? 20 : 0 }}>
              <View style={styles.rateRow}>
                <Text style={styles.rateLabel}>{r.l}</Text>
                <Text style={[styles.rateValue, { color: r.c }]}>{r.v}%</Text>
              </View>
              <Bar w={r.v} color={r.c} />
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
  },
  header: {
    backgroundColor: "#1A73E8",
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greeting: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    marginBottom: 4,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 4,
  },
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.28)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  banner: {
    backgroundColor: "#0D2B6E",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  bannerLabel: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  bannerTime: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 4,
  },
  bannerRoom: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
  },
  markBtn: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  markBtnText: {
    color: "#1A73E8",
    fontWeight: "800",
    fontSize: 14,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#888",
    letterSpacing: 1,
    marginBottom: 12,
  },
  statRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: "center",
    gap: 6,
  },
  statValue: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 30,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  rateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rateLabel: {
    fontSize: 14,
    color: "#444",
    fontWeight: "500",
  },
  rateValue: {
    fontSize: 16,
    fontWeight: "900",
  },
  barTrack: {
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    height: 10,
    overflow: "hidden",
    marginTop: 8,
  },
  barFill: {
    height: "100%",
    borderRadius: 8,
  },
});