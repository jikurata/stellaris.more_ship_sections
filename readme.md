# More Ship Sections V0.0.1
Enable more versatile fleet strategies by implementing new ship section types.
---
## About
---
The idea behind this mod is to give players the ability to design their fleets around more specializations, while maintaining balanced and fair gameplay.
To achieve this, I assigned point values for each component slot:
```
Weapons:
  Point-Defence:  1
  Small:          1
  Medium:         2
  Missile:        2
  Large:          4
  Hangar:         4
  Extra Large:    8

Utility:
  Small:          1
  Medium:         2
  Large:          4
  Auxillary:      2
```
Each ship type is given a maximum ship point value:
```
Corvette:     10
Destroyer:    26
  - Bow:     +14
  - Stern:   +11
Cruiser:      38
  - Bow:     +14
  - Mid:     +16
  - Stern:   +8
Battleship:   60
  - Bow:     +22
  - Mid:     +26
  - Stern:   +12
Titan:        90
  - Bow:     +30
  - Mid:     +38
  - Stern:   +22
Juggernaut:   144
```
The summation of component points will not exceed the ship's point value, except for bunker type ships, which sacrifices weapon size/range for better utility.

In all, this mod will make the following changes to ship sections:
```
  Weapon slot variety:  +++
  Utility Components:   ++
  Auxillary Components: +
  Ship hull points:     no change
```

## Ship Sections
---
This mod attempts to rework the vanilla sections and implement new ones as well.
```
  Broadside:  Picketing / close to midrange engagement
  Artillery:  Smaller utility, larger weapons
  Hangar:     Carrier + Broadside hybrid
  Carrier:    Less utility, more strikecraft, point-defence
  Javelin:    Missile + Missile Defense
  Bunker:     Smaller weapons, larger utility
```

### Corvette
---
**Javelin**
- Weapons:
  - 1 Missile
  - 1 Point-Defence
- Utility:
  - 5 Small
  - 1 Auxillary

**Phalanx**
- Weapons:
  - 1 Small
  - 2 Point-Defence
- Utility:
  - 5 Small
  - 1 Auxillary

**Bunker**
- Weapons:
  - 2 Small
- Utility: 
  - 1 Medium Utility
  - 4 Small Utility
  - 1 Auxillary

**Crusader**
- Weapons:
  - 1 Medium
  - 1 Small
- Utility: 
  - 5 Small Utility
  - 1 Auxillary

### Destroyer
---
Bow Sections:
- **Missile Bay**
  - Weapons:
    - 1 Missile
    - 2 Point-Defence
  - Utility:
    - 2 Medium
    - 4 Small
    - 1 Auxillary

Stern Sections:
- **Javelin**
  - Weapons:
    - 1 Missile
  - Utility:
    - 1 Medium
    - 5 Small
    - 1 Auxillary

- **Artillery (Non-rotational)**
  - Weapons:
    - 1 Large
  - Utility:
    - 5 Small
    - 1 Auxillary

### Cruiser
---
Bow Sections:
- **Missile Bay**
  - Weapons:
    - 2 Missile
  - Utility:
    - 3 Medium
    - 2 Small
    - 1 Auxillary

- **Bunker**
  - Weapons:
    - 4 Small
  - Utility:
    - 4 Medium
    - 2 Small
    - 1 Auxillary

Mid Sections:
- **Bunker**
  - Weapons:
    - 1 Medium
    - 2 Small
    - 2 Point-Defence
  - Utility:
    - 1 Large
    - 2 Medium
    - 2 Small
    - 1 Auxillary

Stern Sections:
- **Javelin**
  - Weapons:
    - 1 Missile
  - Utility:
    - 2 Medium
    - 1 Auxillary

- **Artillery**
  - Weapons:
    - 1 Large
  - Utility:
    - 2 Small
    - 1 Auxillary

- **Hangar**
  - Weapons:
    - 1 Hangar
  - Utility:
    - 2 Small
    - 1 Auxillary

### Battleship
---
Bow Sections:
- **Missile Bay**
  - Weapons:
    - 3 Missile
    - 2 Point-Defence
  - Utility:
    - 2 Large
    - 1 Medium
    - 2 Small
    - 1 Auxillary

- **Bunker**
  - Weapons:
    - 2 Medium
    - 2 Small
    - 2 Point-Defence
  - Utility:
    - 3 Large
    - 2 Medium
    - 1 Auxillary

Mid Sections:
- **Missile Bay**
  - Weapons:
    - 1 Large
    - 4 Missile
  - Utility:
    - 2 Large
    - 1 Medium
    - 2 Small
    - 1 Auxillary
    
- **Barrage**
  - Weapons:
    - 1 Hangar
    - 2 Missile
    - 1 Medium
    - 2 Point-Defence
  - Utility:
    - 2 Large
    - 1 Medium
    - 2 Small
    - 1 Auxillary

Stern Sections:
- **Javelin**
  - Weapons:
    - 2 Missile
  - Utility:
    - 2 Medium
    - 2 Small
    - 1 Auxillary

- **Hangar**
  - Weapons:
    - 1 Hangar
  - Utility:
    - 2 Medium
    - 2 Small
    - 1 Auxillary

- **Bunker**
  - Weapons:
    - 4 Small
    - 2 Point-Defence
  - Utility:
    - 1 Large
    - 2 Medium
    - 1 Auxillary

### Titan
---
Mid Sections:
- **Missile Bay**
  - Weapons:
    - 2 Large
    - 4 Missile
  - Utility:
    - 5 Large
    - 1 Auxillary

- **Carrier**
  - Weapons:
    - 3 Hangar
    - 1 Medium
    - 2 Point-Defence
  - Utility:
    - 5 Large
    - 1 Auxillary

- **Hangar**
  - Weapons:
    - 1 Hangar
    - 2 Large
    - 2 Medium
  - Utility:
    - 5 Large
    - 1 Auxillary

Stern Sections:
- **Javelin**
  - Weapons:
    - 4 Missile
  - Utility:
    - 2 Large
    - 2 Medium
    - 2 Auxillary

- **Carrier**
  - Weapons:
    - 2 Hangar
    - 2 Point-Defence
  - Utility:
    - 2 Large
    - 2 Medium
    - 2 Auxillary

- **Hangar**
  - Weapons:
    - 1 Hangar
    - 2 Medium
    - 2 Point-Defence
  - Utility:
    - 2 Large
    - 2 Medium
    - 2 Auxillary

### Juggernaut
---
**Bombardment**
- Weapons:
  - 2 Extra Large
  - 8 Large
- Utility:
  - 21 Large
  - 5 Auxillary
  
**Cluster Strike**
- Weapons:
  - 2 Extra Large
  - 3 Hangar
  - 10 Missile
- Utility:
  - 21 Large
  - 5 Auxillary

**Suppression**
- Weapons:
  - 1 Extra Large
  - 3 Hangar
  - 3 Large
  - 4 Medium
  - 6 Small
  - 6 Point-Defence
- Utility:
  - 21 Large
  - 5 Auxillary
