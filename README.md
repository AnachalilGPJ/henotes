# 🧾 Henotes – Scriptural Formation Engine

> **accompany the reader in encountering Scripture as a living, transformative Word, grounded in tradition, oriented toward Christ, and embodied in the lives of the saints.**

---

## 🎯 Core Purpose

Henotes is an **interactive scriptural system** designed around a dual-mode architecture that honors both doctrinal clarity and formational transformation. It meets the reader where they are and guides them deeper into the mystery of God's Word through the witness of the saints.

---

## ⚖️ Dual Modes

### ✅ Doctrinal Mode
- **Purpose:** Define truth with clarity
- **Structure:** Golden Threads (Christ-centered unfolding)
- **Tone:** Clear, stable, declarative
- **Authority:** Scripture → Fathers → Councils → Catechism

### ✅ Enrichment Mode
- **Purpose:** Facilitate transformation through contemplation
- **Structure:** Formational Trajectories
- **Tone:** Gentle, contemplative, relational
- **Voice:** Unified synthesis of saints
- **Behavior:** Silence-first, progressive unfolding

---

## 🧠 Architecture Overview

```
Verse
  ↓
Thread Selector
  ↓
Golden Thread(s) + Stage
  ↓
Formational Trajectory
  ↓
Saint Selection Engine
  ↓
Voice Generator
  ↓
Enrichment Response
```

**Commentary Layer** (Lapide, Fathers, Catechism):
- Acts as hidden constraint + stabilizer
- Never leads output
- Validates trajectories
- Refines meaning

---

## 🟡 Golden Threads (Canonical Set)

**6 underpinning movements** that structure all Scripture:

1. **Creation → New Creation** — From cosmos born to cosmos redeemed
2. **Covenant → New Covenant** — From promise to fulfillment in Christ
3. **Sacrifice → Redemption** — From offering to liberation
4. **Kingship → Christ the King** — From earthly rule to cosmic sovereignty
5. **Logos → Word Made Flesh** — From divine speech to incarnation
6. **Presence → God With Us** — From distant holiness to indwelling communion

Each thread contains **stages** marking progression toward Christ.

---

## 🔄 Thread Selector Engine

**Input:** Verse, text, book, chapter context

**Process:**
1. Detect threads via keywords, entities (David, Abraham, Lamb), themes, narrative context
2. Score threads:
   - Entity match: +5
   - Keyword: +3
   - Theme: +2
   - Narrative position: +1
3. Output primary + secondary threads with stage

---

## 🌊 Formational Trajectories

> **Golden Threads = God's Action**  
> **Trajectories = Human Response**

### Canonical Set (8 total)

1. Gift → Rupture → Restoration
2. Guilt → Offering → Surrender → Union
3. Command → Failure → Love
4. Control → Collapse → Service
5. Bondage → Liberation → Freedom
6. Ignorance → Illumination
7. Distance → Presence → Communion
8. Calling → Resistance → Fidelity

Trajectories are **matched to Golden Thread stages** and mediate between doctrinal truth and lived experience.

---

## 👤 Saint Selection Engine

**Core Principle:** Select ONE saint who most strongly embodies the trajectory and stage.

**Pipeline:**
1. Filter by trajectory affinity
2. Filter by stage affinity
3. Score each saint by trajectory strength
4. Select single saint

**Rule:** `maxSaintsDisplayed = 1`

This preserves intimacy and prevents cacophony.

---

## 🎙️ Enrichment Voice System

**Unified voice** synthesized from:
- Teresa of Ávila → intimacy
- Thérèse → simplicity & trust
- John of the Cross → depth & silence
- Francis → embodiment & immediacy
- de Sales → gentleness
- Hildegard → symbolic vision
- Bernard → desire
- Pio → suffering

**Tone Characteristics:**
- Slow
- Invitational
- Non-resolving
- Non-instructional
- Never direct imitation or switching

---

## 🤫 Silence Protocol

| Level     | Behavior                      |
| --------- | ----------------------------- |
| Passive   | Silence only                  |
| Highlight | Minimal response + saint name |
| Expand    | Short reflection              |
| Deep      | Expanded context              |
| Ask       | Commentary allowed            |

**Rule:** Interpretation must never precede encounter.

---

## 🔑 Critical System Rules

These must NOT be broken:

1. **No direct quoting by default** — Saints influence tone, not content
2. **One saint only** — Preserve intimacy and focus
3. **Silence precedes speech** — System never jumps to explanation
4. **Commentary is invisible early** — Never shown before encounter
5. **Christ is always the horizon** — Even if not named, all threads lead there

---

## 📁 Project Structure

```
henotes/
├── src/
│   ├── types/              # TypeScript type definitions
│   │   ├── core.ts         # Selection contexts, requests/responses
│   │   ├── threads.ts      # Golden threads, stages
│   │   ├── trajectories.ts # Formational trajectories
│   │   ├── saints.ts       # Saint profiles
│   │   └── responses.ts    # Output formats
│   ├── engines/            # Core business logic (TBD)
│   │   ├── threadSelector.ts
│   │   ├── trajectoryGenerator.ts
│   │   ├── saintSelector.ts
│   │   └── voiceGenerator.ts
│   ├── data/               # JSON datasets (TBD)
│   │   ├── threads.json
│   │   ├── trajectories.json
│   │   ├── saints.json
│   │   └── commentary.json
│   ├── protocols/          # System protocols (TBD)
│   │   ├── silenceProtocol.ts
│   │   └── commentaryLayer.ts
│   └── utils/              # Helpers (TBD)
├── tests/                  # Test suite (TBD)
├── docs/                   # Architecture & theology (TBD)
├── examples/               # Usage examples (TBD)
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/AnachalilGPJ/henotes.git
cd henotes
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

### Development

```bash
npm run dev
```

---

## 📚 Documentation

- **Architecture** — See `docs/ARCHITECTURE.md`
- **Type System** — See `docs/TYPES.md`
- **Data Format** — See `docs/DATA_FORMAT.md`
- **Theology** — See `docs/THEOLOGY.md`
- **API Reference** — See `docs/API.md`

---

## 🧬 Current Implementation Status

✅ **Complete:**
- Project structure
- Type system foundation
- Architecture documentation

🔧 **In Development:**
- Engine implementations
- Data loading system
- Saint dataset population
- Voice synthesis logic

📋 **Planned:**
- UI layer (React/Vue components)
- CLI interface
- OCR integration
- Voice I/O
- Bibliography mode

---

## 🙏 Theological Foundation

Henotes rests on several theological commitments:

1. **Scripture is living** — Not a museum piece, but the ongoing Word of God
2. **Christ is center** — All threads lead to incarnation and redemption
3. **Saints are witnesses** — Their lived experience validates and embodies doctrine
4. **Silence is sacred** — Not all truth is verbal; encounter precedes explanation
5. **Formation is gradual** — Transformation happens in the rhythm of contemplation, not in bolts of insight

---

## 📜 License

[To be determined]

---

## 👥 Contributors

- Project architecture: Anachalil GPJ

---

## 📮 Contact & Support

For questions, suggestions, or theological feedback:
- Open an issue
- Create a discussion
- Submit a pull request

---

**May Henotes serve the reader's encounter with the living God.**
