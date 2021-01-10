package ru.shestakova.model.type;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Objects;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;

public class PostgreSQLEnumType implements UserType {

  @Override
  public int[] sqlTypes() {
    return new int[] {Types.OTHER};
  }

  @Override
  public Class returnedClass() {
    return TextWorkType.class;
  }

  @Override
  public boolean equals(Object x, Object y) throws HibernateException {
    return x == y;
  }

  @Override
  public int hashCode(Object x) throws HibernateException {
    return Objects.hashCode(x);
  }

  @Override
  public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner)
      throws HibernateException, SQLException {
    final String string = rs.getString(names[0]);
    if(rs.wasNull()) return null;
    return TextWorkType.valueOf(string);
  }

  @Override
  public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session)
      throws HibernateException, SQLException {
    if (value != null) {
      st.setObject(index, ((Enum)value).name(), Types.OTHER);
    } else {
      st.setNull(index, Types.OTHER);
    }
  }

  @Override
  public Object deepCopy(Object value) throws HibernateException {
    return value;
  }

  @Override
  public boolean isMutable() {
    return false;
  }

  @Override
  public Serializable disassemble(Object value) throws HibernateException {
    return (Enum) value;
  }

  @Override
  public Object assemble(Serializable cached, Object owner) throws HibernateException {
    return cached;
  }

  @Override
  public Object replace(Object original, Object target, Object owner) throws HibernateException {
    return original;
  }
}
