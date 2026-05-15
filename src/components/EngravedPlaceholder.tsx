interface Props {
  height: number;
  label?: string;
  corner?: string;
}
export function EngravedPlaceholder({ height, label = 'Imagem editorial', corner }: Props) {
  return (
    <div className="engraving" style={{ height, position: 'relative' }}>
      <div className="eng-label"><span>{label}</span></div>
      {corner && <div className="eng-corner">{corner}</div>}
    </div>
  );
}
