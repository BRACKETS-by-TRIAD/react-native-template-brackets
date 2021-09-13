import { FieldState } from 'formstate'

interface FieldToInputProps {
  onChangeText: any
  value: string

  errorMessage?: string
}

export const fieldToInputProps = (
  field: FieldState<any>,
  sanitize: (val: any) => any = (val) => val
): FieldToInputProps => {
  const props: FieldToInputProps = {
    value: field.value,
    onChangeText: (val: string) => field.onChange(sanitize(val)),
  }

  if (field.hasError) {
    props.errorMessage = field.error
  }

  return props
}
