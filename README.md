# System Monitor Widget

Real-time system monitoring widget for MyWallpapers — displays CPU, memory, battery, disk, and network statistics with live updates.

## Features

✅ **Real-time System Data** — CPU usage, memory, battery status with 3-5-10s refresh rates
✅ **Permission-Gated** — Uses `system.capabilities` permission for all data categories
✅ **Fully Customizable** — Toggle metrics, change colors, adjust transparency
✅ **Responsive** — Scales with widget container
✅ **Battery Status** — Shows charging state and health
✅ **Network Stats** — Download/upload speeds
✅ **Disk Usage** — Multiple drives supported

## Installation

In MyWallpaper, add a new widget with URL:

```
https://cdn.jsdelivr.net/gh/rayandu924/MyWallpapers@main/mywallpaper-system-monitor/index.js
```

Or for local development:

```
dev://http://localhost:5173/
```

## Manifest Permissions

```json
"permissions": {
  "system": {
    "capabilities": ["cpu", "memory", "battery", "disk", "network"]
  }
}
```

The widget only displays metrics for capabilities declared in the manifest. Desktop app required for system data.

## Settings

| Setting | Type | Default | Purpose |
|---------|------|---------|---------|
| Show CPU | Boolean | true | Toggle CPU metrics |
| Show Memory | Boolean | true | Toggle memory stats |
| Show Battery | Boolean | true | Toggle battery info |
| Show Disk | Boolean | false | Toggle disk usage |
| Show Network | Boolean | false | Toggle network stats |
| Refresh Rate | Select | 3s | Update interval |
| Background | Color | #1a1a2e | Widget background |
| Text Color | Color | #00ff88 | Primary text color |
| Accent Color | Color | #00ccff | Metric highlights |
| Transparency | Range | 0.85 | Opacity level |

## Development

```bash
npm install
npm run build
npm run dev      # Watch mode
npm run serve    # Local server
npm run type-check
```

## Architecture

- **SDK Hooks**: `useSystem()` for real-time data, `useSettings()` for customization, `useViewport()` for responsive sizing
- **Permission-Gated**: Only receives data categories declared in manifest
- **Real-time Updates**: Subscribes to system data changes (~3s intervals on desktop)
- **Browser Fallback**: Shows OS only if desktop app unavailable

## Testing Permissions

This widget is a complete test case for the `system.capabilities` permission system:

1. Add widget to MyWallpaper
2. Declare `system.capabilities: ["cpu", "memory", "battery"]` in manifest
3. Toggle metrics in settings — only permitted data displays
4. On desktop app: data updates every 3 seconds
5. In browser only: "System data unavailable" message appears

## Size

- **Minified**: 9.88 KB
- **Gzipped**: 1.96 KB

## License

MIT
