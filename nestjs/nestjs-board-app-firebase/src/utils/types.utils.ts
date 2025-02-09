export function enumIncludes<T extends string, TEnumValue extends string>(
  enumVariable: { [key in T]: TEnumValue },
  item: unknown
): item is TEnumValue {
  return Object.values(enumVariable).includes(item);
}

export function getEnumValue<T extends string, TEnumValue extends string, P = undefined>(
  enumVariable: { [key in T]: TEnumValue },
  item: unknown,
  placeholder: P = undefined as unknown as P
): TEnumValue | P {
  return enumIncludes(enumVariable, item) ? (item as TEnumValue) : placeholder;
}
