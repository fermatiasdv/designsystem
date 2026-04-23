import { ButtonTest } from '@designsystemfdv/button-test'

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ButtonTest variant="primary" size="md">Primary</ButtonTest>
      <ButtonTest variant="secondary" size="md">Secondary</ButtonTest>
      <ButtonTest variant="ghost" size="md">Ghost</ButtonTest>
      <ButtonTest variant="primary" size="sm">Small</ButtonTest>
      <ButtonTest variant="primary" size="lg">Large</ButtonTest>
      <ButtonTest variant="primary" disabled>Disabled</ButtonTest>
    </div>
  )
}

export default App
