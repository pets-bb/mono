type Omit<T, K extends keyof T> = Exclude<keyof T, K>

type HOC<InjectProps> = <Props extends InjectProps>(
  Component: React.ComponentType<Props>,
) => React.ComponentType<Omit<Props, keyof InjectProps>>
