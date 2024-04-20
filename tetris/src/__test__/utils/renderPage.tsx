import App from '@/App';
import { useStage } from '@/stores/stage';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function renderApp() {
  render(<App />);
}

export async function renderStageIntroPage(stage?: number) {
  if (stage) {
    useStage.setState({
      stage,
    });
  }
  renderApp();
  await screen.findByText(/StartPage/);
  const button = await screen.findByRole('button', { name: /Game Start/ });
  await userEvent.click(button);
}

export async function renderRankingPage() {
  renderApp();
  await screen.findByText(/StartPage/);
  const button = await screen.findByRole('button', { name: /Go Ranking Page/ });
  await userEvent.click(button);
}

export async function renderPlayPage(stage?: number) {
  await renderStageIntroPage(stage);
  const button = await screen.findByRole('button', { name: /Go Play Page/ });
  await userEvent.click(button);
}

export async function renderStageClearPage(stage?: number) {
  await renderPlayPage(stage);
  const button = await screen.findByRole('button', { name: /Go Stage Clear Page/ });
  await userEvent.click(button);
}
