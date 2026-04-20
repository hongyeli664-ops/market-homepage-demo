import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch() {
    return;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-100 px-4 py-10">
          <div className="page-shell">
            <div className="surface-card p-6 text-center sm:p-8">
              <h1 className="text-xl font-bold text-slate-900">页面加载出现问题</h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                已启用兜底渲染。请刷新页面重试，如果仍然失败，可以重新部署最新构建版本。
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
