# Design

## Theme
Dark mode chủ đạo (Deep space/Slate) kết hợp với các hiệu ứng kính (Glassmorphism) và chuyển động mượt mà (Fluid motion).

## Color Strategy
**Committed**: Sử dụng tông màu tối (Dark Slate/Blue) làm nền, điểm xuyết bằng màu nhấn (Accent) là Cyan hoặc Electric Blue để tạo cảm giác công nghệ.

- Background: `oklch(18% 0.02 240)`
- Surface: `oklch(25% 0.03 240 / 0.7)` (Blur: 12px)
- Primary/Accent: `oklch(75% 0.15 200)`
- Text: `oklch(95% 0.01 240)`

## Typography
- Heading: **Cal Sans** hoặc **Geist Sans** (Bold, wide)
- Body: **Geist Mono** (Clean, technical feel)

## Layout
- Grid-breaking elements.
- Staggered animations cho project list.
- Bento grid cho phần kỹ năng.

## Components
- **Magnetic Buttons**: Nút bấm có hiệu ứng hút nam châm khi di chuột gần.
- **Project Cards**: Hiệu ứng tilt (nghiêng) 3D và gradient border.
- **Background Noise**: Hiệu ứng hạt (grain/noise) mỏng để tăng chiều sâu.
