from django.forms import widgets


FORM_FIELDS = {
    widgets.SelectMultiple: 'select_multiple',
    widgets.Select: 'select',
    widgets.DateTimeInput: 'datetime',
    widgets.DateInput: 'date',
    widgets.TextInput: 'text',
    widgets.NumberInput: 'number',
    widgets.Textarea: 'textarea',
    widgets.EmailInput: 'text',
    widgets.CheckboxInput: 'checkbox',
    widgets.PasswordInput: 'password',
    widgets.FileInput: 'File'
}


def serialize(field):
    """
    serializes form field into json.
    :param field:
    :return:
    """
    field = field.__dict__
    print(field['widget'])
    field['widget'] = FORM_FIELDS.get(type(field['widget']), 'image')
    if 'coerce' in field:
        del field['coerce']

    del field['validators'], field['initial']
    return field





