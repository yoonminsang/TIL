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

export async function renderPlayPage() {
  await renderStageIntroPage();
  const button = await screen.findByRole('button', { name: /Go Play Page/ });
  await userEvent.click(button);
}

export async function renderStageClearPage(stage?: number) {
  if (stage) {
    useStage.setState({
      // NOTE: stage를 clear하면 1단계가 오르기 때문에 -1을 해줌
      stage: stage - 1,
    });
  }
  await renderPlayPage();
  const button = await screen.findByRole('button', { name: /Go Stage Clear Page/ });
  await userEvent.click(button);
}

export async function renderDeadPage(stage?: number) {
  if (stage) {
    useStage.setState({
      stage,
    });
  }
  await renderPlayPage();
  const button = await screen.findByRole('button', { name: /Go Stage Dead Page/ });
  await userEvent.click(button);
}
