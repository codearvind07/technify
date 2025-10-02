// Test file to verify scroll fix
const TestScrollFix = () => {
  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Scroll Test</h1>
      <p>This page should only have one scrollbar, not nested scrollbars.</p>
      <p>If you see only one scrollbar on the right side of the page, the fix is working.</p>
      <p>If you see multiple scrollbars or nested scrolling behavior, the issue persists.</p>
    </div>
  );
};

export default TestScrollFix;