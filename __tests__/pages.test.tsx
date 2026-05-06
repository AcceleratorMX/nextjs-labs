import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LoginPage from "@/app/(main)/login/page";
import RegisterPage from "@/app/(main)/register/page";
import CreateArticlePage from "@/app/(main)/articles/create/page";
import FavoriteArticlesPage from "@/app/(main)/articles/favorite/page";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next-auth/react
jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
  useSession: () => ({ data: null, status: "unauthenticated" }),
}));

// Mock SWR to prevent fetching
jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({ data: [], error: null, isLoading: false }),
}));

// Mock Antd to avoid internal UI crashes in Jest
jest.mock("antd", () => {
  const React = jest.requireActual("react");

  const Dummy = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="antd-mock">{children}</div>
  );

  const MockForm = ({ children }: { children: React.ReactNode }) => (
    <form data-testid="form-mock">{children}</form>
  );
  MockForm.Item = Dummy;
  MockForm.useForm = () => [
    {
      validateFields: jest.fn().mockResolvedValue({}),
      resetFields: jest.fn(),
      setFieldsValue: jest.fn(),
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MockInput = Dummy as any;
  MockInput.Password = Dummy;
  MockInput.TextArea = Dummy;

  return {
    __esModule: true,
    Form: MockForm,
    Button: Dummy,
    Input: MockInput,
    Checkbox: Dummy,
    Select: Dummy,
    Card: Dummy,
    Row: Dummy,
    Col: Dummy,
    Divider: Dummy,
    Alert: Dummy,
    Typography: {
      Title: Dummy,
      Text: Dummy,
      Link: Dummy,
    },
    message: {
      error: jest.fn(),
      success: jest.fn(),
      warning: jest.fn(),
    },
    notification: { open: jest.fn(), success: jest.fn() },
    Modal: Dummy,
    Spin: Dummy,
  };
});

describe("Pages Rendering Tests", () => {
  it("renders Login page without crashing", () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders Register page without crashing", () => {
    const { container } = render(<RegisterPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders Create Article page without crashing", () => {
    const { container } = render(<CreateArticlePage />);
    expect(container).toBeInTheDocument();
  });

  it("renders Favorite Articles page without crashing", () => {
    const { container } = render(<FavoriteArticlesPage />);
    expect(container).toBeInTheDocument();
  });
});
